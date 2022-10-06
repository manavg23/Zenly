/** Nutrition Tracker Router
 * @namespace nt.Router
 * @class nt.Router
 * @memberof! <global>
 * @extends Backbone.Router */

// The # tells JSDoc that the items lent to nt.Router belong to an instance of the class.
nt.Router = Backbone.Router.extend(/** @lends nt.Router# */{

    /** Routes for this app
     * @property {object} routes
     * @memberof nt.Router */
    routes:{
        
        'search': 'startSearch',
        'search/:query': 'search',
        'tracker/:display(/:date)': 'tracker'
    },

    /** Update url and call route function
     * @function goto
     * @memberof nt.Router */
    goto: function(url) {
        nt.Router.Instance.navigate(url, { trigger: true });
    }, // goto

    

    /** Display empty search view
     * @function startSearch
     * @memberof nt.Router */
    startSearch: function() {
        var isSearchOpen = $('#search').hasClass('active');
        if(!isSearchOpen) $('#tab1').trigger('click');
        nt.Views.start.hideStart();
        nt.Views.search.$searchFood.val('');
        nt.Views.search.$searchResults.html('');

    }, // startSearch

    /** Update search box with query, run search, then hide autocomplete
     * @function search
     * @memberof nt.Router */
    search: function(query) {
        var isSearchOpen = $('#search').hasClass('active');
        if(!isSearchOpen) $('#tab1').trigger('click');
        nt.Views.start.hideStart();
        nt.Views.search.$searchFood.val(query);
        nt.Views.search.searchFood();
        nt.Plugin.Instance.hide();

    }, // search

    /** Set tracker view options based on url parameters
     * @function tracker
     * @memberof nt.Router */
    tracker: function(optDisplay, optDate) {
        nt.Views.start.hideStart();

        // Check if the Tracker tab is active
        var isTrackerOpen = $('#tracker').hasClass('active');

        // Activate the tracker tab
        if(!isTrackerOpen) $('#tab2').trigger('click');

        if(optDisplay === 'all') {
            $('#dtContainer').hide();
            nt.Option.displayAll = true;
            nt.Views.tracker.$dtp.data('DateTimePicker').date( moment(new Date()) );
        }
        else if (optDisplay === 'date' && optDate.length > 0) {
            // Format the date for the date picker
            var formattedDate = moment(optDate).format('MMMM D, YYYY');

            // Set options based on display setting
            $('#dtContainer').show();
            nt.Option.displayAll = false;
            nt.Option.trackerDate = optDate;

            // Update the date picker's date which will trigger a re-render
            nt.Views.tracker.$dtp.data('DateTimePicker').date(formattedDate);
        }

        // Bold the current option
        nt.Views.tracker.dateDisplay();

    } // tracker

});
