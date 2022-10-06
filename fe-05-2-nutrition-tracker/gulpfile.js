/*eslint-env node */

var gulp = require('gulp'),
    del = require('del'),
    path = require('path'),
    merge = require('merge-stream'),
    lazypipe = require('lazypipe'),
    eslint = require('gulp-eslint'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    rename = require('gulp-rename'),
    ignore = require('gulp-ignore'),
    handlebars = require('gulp-handlebars'),
    wrap = require('gulp-wrap'),
    declare = require('gulp-declare'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');


/** Default task **/
gulp.task('default', ['lint', 'replace-html', 'copy-fonts', 'copy-images']);

/** Clean distribution folder **/
gulp.task('clean', function() {
    return del(['public/dist/**/*']);
});

gulp.task('cleanDryRun', function() {
    return del(['public/dist/**/*'], {dryRun: true}).then(paths => {
        console.log('Files and folders that would be deleted:\n', paths.join('\n'));
    });
});

/** JS LINTER **/
gulp.task('lint', function() {
    return gulp.src(['public/src/js/namespace.js',
                     'public/src/js/templates.js',
                     'public/src/js/app.js',
                     'public/src/js/router.js',
                     'public/src/js/models/*.js',
                     'public/src/js/collections/*.js',
                     'public/src/js/views/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

/** CONCAT, MINIFY, CREATE SOURCEMAP and REPLACE HTML **/
gulp.task('replace-html', ['lint'], function() {
    return gulp.src('public/src/index.html')
        .pipe(useref({}, lazypipe().pipe(sourcemaps.init)))
        .pipe(gulpif('*.css', cssnano()))
        .pipe(ignore.exclude('public/src/js/lib/*.js'))
        .pipe(gulpif('*.js', uglify({preserveComments: 'license'})))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/dist'));
});

/** COPY FONTS **/
gulp.task('copy-fonts', ['replace-html'], function() {
    return gulp.src('public/src/fonts/*.*')
        .pipe(gulp.dest('public/dist/fonts'));
});

/** COPY IMAGES **/
gulp.task('copy-images', ['copy-fonts'], function() {
    return gulp.src('public/src/images/*.*')
        .pipe(gulp.dest('public/dist/images'));
});

/** Solo plugin minify task **/
gulp.task('minify-plugins', function() {
    return gulp.src(['public/src/js/lib/es6-polyfill.js',
                     'public/src/js/lib/backbone.typeahead.js',
                     'public/src/js/lib/eqHeights.js'])
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify({preserveComments: 'license'}))
        .pipe(gulp.dest('public/src/js/lib'));
});

/** Solo handlebars template compiler task **/
gulp.task('compile-templates', function() {
    // https://github.com/lazd/gulp-handlebars#compiling-partials
    var partials = gulp.src(['public/src/templates/*-partial.html'])
        .pipe(handlebars({
            handlebars: require('handlebars')
        }))
        .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
            imports: {
                processPartialName: function(fileName) {
                return JSON.stringify(path.basename(fileName, '.js'));
                }
            }
        }));

    var templates = gulp.src(['public/src/templates/*.html','!public/src/templates/*-partial.html'])
        .pipe(handlebars({
            // Pass your local handlebars version (4.0.5)
            handlebars: require('handlebars')
        }))
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'Handlebars.Templates',
            noRedeclare: true // Avoid duplicate declarations
        }));

    return merge(partials, templates)
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('public/src/js'));
});
