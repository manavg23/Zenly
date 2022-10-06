/** Tracker Editor View
 * @namespace  nt.Views
 * @class nt.Views.Editor
 * @memberof! <global>
 * @extends Backbone.View */
nt.Views.Editor = Backbone.View.extend(/** @lends nt.Views.Editor# */{

    tagName: 'div',

    className: 'edit-item',

    editorTemplate: Handlebars.Templates.editor,

    count: 1,

    events: {
        'click #foodSave': 'saveFood',
        'click #foodClose': 'close',
        'click #servingIncrease': 'servingIncrease',
        'click #servingDecrease': 'servingDecrease'
    },

    /** Create a new food model this view will display and listen for changes */
    initialize: function() {
        this.createFood().listenTo(this.food, 'change', this.updateView);
    }, // initialize

    /** Re-render the editor view */
    updateView: function() {
        var prev = $('#dateTimePicker').data('DateTimePicker').date();
        $('#dateTimePicker').data('DateTimePicker').destroy();
        this.render().renderDatePicker();

        // If there was a date set, then set it to the previous value
        if(prev)
            this.$el.find('#dateTimePicker').data('DateTimePicker').date(prev);

    }, // updateView

    /** Render food */
    render: function() {
        // Populate nutrition inputs
        this.$el.html(this.editorTemplate( this.food.toJSON() ));

        // Enable chaining
        return this;

    }, // render

    /** Activate the date picker plugin */
    renderDatePicker: function() {
        // Use this.$el since template html is inserted in the DOM later
        this.$el.find('#dateTimePicker').datetimepicker({
            format: 'YYYY-MM-DD',
            allowInputToggle: true,
            widgetPositioning: { horizontal: 'right' }
        });

        return this;

    }, // renderDatePicker

    /** Display validation error */
    renderError: function(message) {
        var error = '<p class="bs-callout bs-callout-danger alert-danger"><i class="glyphicon glyphicon-exclamation-sign"></i> ' + message + '</p>';
        this.$el.find('#editor-top').append(error);

    }, // renderError

    /** Remove error message */
    removeError: function() {
        this.$el.find('.bs-callout').remove();
    }, // removeError

    /** Get original food attribute values from the nutrition view model */
    getFoodAttributes: function() {
        return this.model.toJSON();
    }, // getFoodAttributes

    /** Get the latest values for user editable attributes */
    userAttributes: function() {
        return {
            trackDate:  this.$el.find('#foodTrackDate').val().trim(),
            itemName: this.$el.find('#foodName').val().trim(),
            servingCount: this.count,
            moreThanOne: this.count > 1
        };

    }, // newAttributes

    /** Create a new model for the Tracker and copy the nutritionView's data to it */
    createFood: function() {
        var attrs = this.getFoodAttributes();

        // Create a new nutrition Model
        this.food = new nt.Models.Nutrition();

        // Add nutrition data
        this.food.set( attrs );

        var servings = this.food.get('servingCount');

        // Check the serving count and update the values
        if(servings > 1) {
            this.count = servings;
            this.food.valueUpdate(attrs, servings);
        }

        return this;

    }, // createFood

    /** Save the model to the collection and close the view */
    saveFood: function(e) {
        e.preventDefault();

        this.removeError();

        // Reset attribute values if serving count was changed
        if(this.count > 1)
            this.food.valueUpdate(this.getFoodAttributes(), 1);

        var userAttr = this.userAttributes();

        // Set user editable attributes
        this.food.set( userAttr, {validate: true} );

        var notValid = this.food.validationError;

        if(notValid) {
            this.renderError(notValid);
        } else {
            // Add and save food to tracker Collection
            nt.Collections.tracker.create(this.food, {merge: true});

            // Tell the Nutrition View the food was saved
            this.model.trigger('foodsaved');

            // Close this view
            this.close();
        }

    }, // saveFood

    /** Destroy date picker and this view */
    close: function() {
        $('#dateTimePicker').data('DateTimePicker').destroy();
        this.remove();
    }, // close

    /** Increase serving amount and update values */
    servingIncrease: function() {
        if(this.count >= 1) this.count++;

        this.food.valueUpdate(this.getFoodAttributes(), this.count);

    }, // servingIncrease

    /** Decrease serving amount and update values */
    servingDecrease: function() {
        if(this.count >= 2) this.count--;

        this.food.valueUpdate(this.getFoodAttributes(), this.count);

    } // servingDecrease

});
