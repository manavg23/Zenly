/** Model for each food item tracked
 * @namespace nt.Models
 * @class nt.Models.Food
 * @memberof! <global>
 * @extends Backbone.Model */
nt.Models.Food = Backbone.Model.extend(/** @lends nt.Models.Food# */{

    /** Default attributes */
    defaults: {
        id: '',
        sortOrder: 0,
        name: '',
        fat: 0,
        carbs: 0,
        protein: 0,
        calories: 0,
        servingSize: 0,
        servingUnit: ''
    },

    /** Override parse and return response attributes */
    parse: function(response) {
    // reference: https://github.com/jashkenas/backbone/issues/1451#issuecomment-6547963

        //  Only parse response if data from API
        if (typeof response.fields != 'undefined') {
        var food = {};
            food.id          = response._id;
            food.name        = response.fields.item_name;
            food.calories    = response.fields.nf_calories;
            food.fat         = response.fields.nf_total_fat;
            food.carbs       = response.fields.nf_total_carbohydrate;
            food.protein     = response.fields.nf_protein;
            food.servingSize = response.fields.nf_serving_size_qty;
            food.servingUnit = response.fields.nf_serving_size_unit;

            return food;
        } else
            return response;

    } // parse

});