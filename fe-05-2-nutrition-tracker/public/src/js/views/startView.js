/** Start screen
 * @namespace nt.Views
 * @class nt.Views.Start
 * @memberof! <global>
 * @extends Backbone.View */
nt.Views.Start = Backbone.View.extend(/** @lends nt.Views.Start# */{

    /** element */
    el: '#start-screen',

    /** events hash */
    events: {
        'click .btn-success': 'startSearch'
    },

    /** Shows the start screen
     * @function  showStart
     * @memberof  nt.Views.Start */
    showStart: function() {
        this.$el.show();
        $('#app').hide();

    }, // showStart

    /** Hides the start screen
     * @function  hideStart
     * @memberof  nt.Views.Start */
    hideStart: function() {
        this.$el.hide();
        $('#app').show();

    }, // hideStart

    /** Updates the url and hides the start screen
     * @function  startSearch
     * @memberof  nt.Views.Start */
    startSearch: function() {
        nt.Router.Instance.goto('search');
    } // startSearch

});
