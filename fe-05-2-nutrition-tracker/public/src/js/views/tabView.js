/** Tab navigation
 * @namespace  nt.Views
 * @class nt.Views.TabNav
 * @memberof! <global>
 * @extends Backbone.View */
nt.Views.TabNav = Backbone.View.extend(/** @lends nt.Views.TabNav# */{

    /** Enable bootstrap tabs and equalize column heights
     * @function  initialize
     * @memberof  nt.Views.TabNav */
    initialize: function() {
        $('#app-tabs a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
            $('.row').eqHeights({child:'.eqHeights'});
        });

    } // initialize

});
