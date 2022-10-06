/** Nutrition View
 * @namespace  nt.Views
 * @class nt.Views.Nutrition
 * @memberof! <global>
 * @extends Backbone.View */
nt.Views.Nutrition = Backbone.View.extend(/** @lends nt.Views.Nutrition# */{

    el: '#app',

    buttonsTemplate: Handlebars.Templates.buttons,

    events: {
        'click .item-nutrition': 'openNutrition',
        'click #nutrition-close': 'closeNutrition',
        'click #nutrition-add': 'addFood',
        'click #nutrition-remove': 'removeFood',
        'click #nutrition-track': 'openTrackerView'
    },

    /** Setup `this` context, DOM refs, variables, listeners and load google chart api */
    initialize: function() {
        _.bindAll(this, 'itemSuccess', 'itemError');

        this.$nutrition = $('#nutrition');
        this.$nutritionTop = $('#nutrition-top');
        this.$nutritionMenu = $('#nutrition-button-menu');
        this.$nutritionResults = $('#nutrition-results');
        this.$nLabel = $('#nlabel');
        this.trackedItem = null;
        this.gchart = null;
        this.gformat = null;

        // Load the Visualization API and the corechart package.
        google.charts.load('current', {'packages':['corechart']});

        // Close the Nutrition view when another search is run
        this.listenTo(nt.Plugin.Instance, 'selected', this.closeNutrition);

        // Update the Nutrition view model and tracking status when a food is saved
        this.listenTo(this.model, 'foodsaved', this.updateView);

    }, // initialize

    /** Display the button menu, pie chart, and nutrition label */
    render: function() {
        // Display button menu
        this.displayMenu();

        // Display pie chart
        this.displayChart();

        // Display nutrition label
        this.displayNutrition();

    }, // render

    /** Display the nutrition view */
    showColumn: function() {
        this.$nutrition.removeClass('hideColumn');
    }, // showColumn

    /** Hide the nutrition view */
    hideColumn: function() {
        this.$nutrition.addClass('hideColumn');
    }, // hideColumn

    /** Get the food item id and highlight it in the search view */
    openNutrition: function(e) {
        var elem = $(e.target);
        var id   = elem.data('item');

        e.preventDefault();

        // Close if already open
        this.closeNutrition();

        // Highlight selected item
        elem.closest('.item').css('background-color', '#b8dec0').addClass('highlight');

        // Show second column
        this.showColumn();

        // Get item data from localStorage or from the API
        this.checkItem(id);

    }, // openNutrition

    /** Check if the item selected is already in the tracker */
    checkItem: function(itemId) {
        // Check if this item is already being tracked
        this.trackedItem = nt.Collections.tracker.get(itemId);

        if(this.trackedItem) {
            // Copy the data from the tracker
            this.model.set( this.trackedItem.toJSON() );

            // Display the item
            this.itemSuccess();
        } else {
            // Get nutrition data from API using the item id
            this.getNutrition(itemId);
        }

    }, // checkItem

    /** Remove highlight, clear nutrition view, and hide the view */
    closeNutrition: function() {
        // Remove highlight from selected item
        $('.highlight').removeAttr('style').removeClass('highlight');

        // Clear chart and nutrition label
        this.$nutritionResults.find('figure').html('');

        // Hide second column
        this.hideColumn();

        // Restore hidden icons
        $('.tracked-delete').show();

    }, // closeNutrition

    /** AJAX success callback */
    itemSuccess: function(model, response) {
        // Render the nutrition info
        this.render();

        // Make the Search and Nutrition columns equal heights
        $('.row').eqHeights({child:'.eqHeights'});

    }, // itemSuccess

    /** AJAX error callback */
    itemError: function(model, errorResponse) {
        var status = errorResponse.status;
        var statusText = errorResponse.statusText;
        var msg = '<div class="alert alert-danger">Nutritionix item request failed: <br>' +
                   status + ' : ' + statusText + '</div>';
        this.$nutritionMenu.html(msg);

    }, // itemError

    /** Get food item details from Nutritionix */
    getNutrition: function(itemID) {
        var parameters = {
            'id': itemID,
            'appId': '53242d79',
            'appKey': '82289438a16ec7b92cdcf5ad054159c4'
        };

        // Display loading animation
        this.$nutritionMenu.html(nt.preloader);

        // Clear the model
        this.model.clear();

        // Make GET request to Nutritionix
        this.model.fetch({
            data: $.param(parameters),
            success: this.itemSuccess,
            error: this.itemError
        });

    }, // getNutrition

    /** Display pie chart using fat, carbs, and protein values */
    displayChart: function() {
        var fat = this.model.get('valueTotalFat');
        var carbs = this.model.get('valueTotalCarb');
        var protein = this.model.get('valueProteins');

        var data = google.visualization.arrayToDataTable([
            ['Nutrient', 'Value'],
            ['Fat', fat],
            ['Carbs', carbs],
            ['Protein', protein]
        ]);

        var options = {
            width: 280,
            height: 140,
            backgroundColor: '#b8dec0',
            sliceVisibilityThreshold: 0
        };

        var notZero = (parseFloat(fat + carbs + protein) !== 0);

        // Don't draw a chart if all the values are zero
        if(notZero) {
            // Add 'g' for grams unit to the values
            if(!this.gformat)
                this.gformat = new google.visualization.NumberFormat({suffix: 'g'});

            // Clear chart.
            if(this.gchart) this.gchart.clearChart();

            // Instantiate chart.
            this.gchart = new google.visualization.PieChart(
                    document.getElementById('gchart')
                );

            // Apply formatter to second column
            this.gformat.format(data, 1);

            // Draw chart.
            this.gchart.draw(data, options);
        }

    }, // displayChart

    /** Use label plugin to format and display nutritional values */
    displayNutrition: function() {
        // Reference Example #2
        // http://dev2.nutritionix.com/html/label-jquery-plugin/demo/demo.html

        // Reset the element and previous event handlers
        this.$nLabel.html('');
        this.$nLabel.undelegate();

        // Activate Nutrition Label jQuery Plugin by Nutritionix
        this.$nLabel.nutritionLabel(this.model.toJSON());

    }, // displayNutrition

    /** Display if food item is being tracked and button options */
    displayMenu: function() {
        var isTracked = false;

        // Clear button menu container
        this.$nutritionMenu.html('');

        // Set tracking flag
        if(this.trackedItem) isTracked = true;

        // Add the button menu html
        this.$nutritionMenu.append(this.buttonsTemplate({
            tracking: isTracked
        }));

    }, // displayMenu

    /** Open editor view for food */
    addFood: function() {
        // Create an editor view with the nutrition data model
        var editorView = new nt.Views.Editor({model: this.model});

        // Render the editor view and append its element to the nutrition view
        this.$nutrition.append( editorView.render().renderDatePicker().el );

    }, // addFood

    /** Destroy food model from the tracker collection using the id */
    removeFood: function() {
        var id = this.model.get('id');
        var food = nt.Collections.tracker.get(id);
        food.destroy();
        this.trackedItem = null;
        this.displayMenu();

    }, // removeFood

    /** When the 'foodsaved' event occurs, update the view's model and tracker status */
    updateView: function() {
        var itemId = this.model.get('id');
        var foodAttributes = nt.Collections.tracker.get(itemId).toJSON();
        this.model.set(foodAttributes);
        this.displayNutrition();
        this.trackedItem = true;
        this.displayMenu();

    }, // updateView

    /** If the item is being tracked, clicking the tracker status will open the tracker view */
    openTrackerView: function() {
        this.closeNutrition();
        $('#tab2').trigger('click');

    } // openTrackerView

});
