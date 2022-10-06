/** Recipe View
 * @namespace  nt.Views
 * @class nt.Views.Recipe
 * @memberof! <global>
 * @extends Backbone.View */
nt.Views.Recipe = Backbone.View.extend(/** @lends nt.Views.Recipe# */{

    el: '#search',

    recipeTemplate: Handlebars.Templates.recipe,

    events: {
        'click #recipe-open': 'openRecipes',
        'click #recipe-close': 'closeRecipes'
    },

    /** Setup `this` context and DOM references */
    initialize: function() {
        _.bindAll(this, 'recipeSuccess', 'recipeError');
        this.$searchTop = $('#search-top');
        this.$searchResults = $('#search-results');
        this.$recipeTop = $('#recipe-top');
        this.$recipeResults = $('#recipe-results');
        this.$recipeResults.html(nt.preloader);

    }, // initialize

    /** Render results */
    render: function() {
        // Clear out old results
        this.$recipeResults.html('');

        // Populate recipe template with the recipe attributes
        this.$recipeResults.append( this.recipeTemplate({recipes: this.collection.toJSON()}) );

        return this;

    }, // render

    /** AJAX success callback */
    recipeSuccess: function(collection, response) {
        this.render();
    }, // recipeSuccess

    /** AJAX error callback */
    recipeError: function(collection, errorResponse) {
        var status = errorResponse.status;
        var statusText = errorResponse.statusText;
        var msg = '<div class="alert alert-danger">Edamam recipe request failed with error: <br>' +
                   status + ' : ' + statusText + '</div>';
        this.$recipeResults.html(msg);

    }, // recipeError

    /** Get Edamam recipes */
    getRecipes: function(q) {
        // Edamam API https://developer.edamam.com/recipe-docs
        var parameters = {
            'q': q,
            'app_id': '109142f6',
            'app_key': '21467cc06c5f05e55b19271dcc457914',
            'to': '5' // return 5 results
        };

        // Clear out all the models in the collection
        this.collection.reset();

        // Make JSONP request to Edamam
        this.collection.fetch({
            data: $.param(parameters),
            success: this.recipeSuccess,
            error: this.recipeError
        });

    }, // getRecipes

    /** Hide search view and show recipe view */
    openRecipes: function() {
        var food = $('#search-food').val();

        this.getRecipes(food);
        this.$searchTop.hide();
        this.$searchResults.hide();
        this.$recipeTop.show();
        this.$recipeResults.show();

    }, // openRecipes

    /** Hide recipe view and show search view */
    closeRecipes: function() {
        this.$recipeResults.html('');
        this.$recipeTop.hide();
        this.$searchTop.show();
        this.$recipeResults.hide();
        this.$searchResults.show();

    } // closeRecipes

});
