/** Collection of foods searched
 * @namespace  nt.Collections
 * @class nt.Collections.FoodSearch
 * @memberof! <global>
 * @extends Backbone.Collection */
nt.Collections.FoodSearch = Backbone.Collection.extend(/** @lends nt.Collections.FoodSearch# */{

    /** Reference to this collection's model. */
    model: nt.Models.Food,

    searchPhrase: '',

    /** Nutritionix API /search will return an array of matching foods */
    url: function() {
        return 'https://api.nutritionix.com/v1_1/search/' + this.searchPhrase;
    }, // url

    /** Override parse to return only "hits" from the response */
    parse: function(response) {
        return response.hits;
    }, // parse

    /** This generates the next order number for new items.
    * @returns {number} Next order number */
    nextOrder: function() {
        if ( !this.length ) {
            return 1;
        }
            return this.last().get('sortOrder') + 1;

    }, // nextOrder

    /**  Each food item is sorted by its original insertion order.
    * @returns {number} Sort order */
    comparator: function( food ) {
            return food.get('sortOrder');
    } // comparator

});
