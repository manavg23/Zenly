/** Model for nutrition label data
 * @namespace nt.Models
 * @class nt.Models.Nutrition
 * @memberof! <global>
 * @extends Backbone.Model */
nt.Models.Nutrition = Backbone.Model.extend(/** @lends nt.Models.Nutrition# */{

    /** Default attributes */
    defaults: function() {
        return {
            width: 280,
            id: '',
            itemName: '',
            servingCount: 1,
            moreThanOne: false,

            showPolyFat: false,
            showMonoFat: false,
            showIngredients: false,

            valueServingSize: 0,
            valueServingSizeUnit: '',

            valueCalories: 0,
            valueFatCalories: 0,
            valueTotalFat: 0,
            valueSatFat: 0,
            valueTransFat: 0,
            valueCholesterol: 0,
            valueSodium: 0,
            valueTotalCarb: 0,
            valueFibers: 0,
            valueSugars: 0,
            valueProteins: 0,
            valueVitaminA: 0,
            valueVitaminC: 0,
            valueCalcium: 0,
            valueIron: 0
        };
    },

    /** Nutritionix API /item will return an object with all nutrition data */
    url: 'https://api.nutritionix.com/v1_1/item/',

    /** Override parse and return response attributes */
    parse: function(data) {

        //  Only parse response if data from API
        if (data.hasOwnProperty('item_id')) {
        var label = {};
            label.width                = 280;
            label.id                   = data.item_id;
            label.itemName             = data.item_name;
            label.servingCount         = 1;
            label.moreThanOne          = false;
            label.showPolyFat          = false;
            label.showMonoFat          = false;
            label.showIngredients      = false;
            label.valueServingSize     = data.nf_serving_size_qty;
            label.valueServingSizeUnit = data.nf_serving_size_unit;
            label.valueCalories        = data.nf_calories;
            label.valueFatCalories     = data.nf_calories_from_fat;
            label.valueTotalFat        = data.nf_total_fat;
            label.valueSatFat          = data.nf_saturated_fat;
            label.valueTransFat        = data.nf_trans_fatty_acid;
            label.valueCholesterol     = data.nf_cholesterol;
            label.valueSodium          = data.nf_sodium;
            label.valueTotalCarb       = data.nf_total_carbohydrate;
            label.valueFibers          = data.nf_dietary_fiber;
            label.valueSugars          = data.nf_sugars;
            label.valueProteins        = data.nf_protein;
            label.valueVitaminA        = data.nf_vitamin_a_dv;
            label.valueVitaminC        = data.nf_vitamin_c_dv;
            label.valueCalcium         = data.nf_calcium_dv;
            label.valueIron            = data.nf_iron_dv;

            return label;
        } else
            return data;

    }, // parse

    /** Model validation for editable attributes */
    validate: function(attrs, options) {
        // Check if property exists since it is not a default attribute
        if(attrs.hasOwnProperty('trackDate')) {
            if (attrs.trackDate === '') {
                return 'Date cannot be blank.';
            }

            // Use momentjs to validate date format
            // http://momentjs.com/docs/#/parsing/string-format/
            var valid = moment(attrs.trackDate, 'YYYY-MM-DD', true).isValid();
            if(!valid) {
                return 'Date must be in YYYY-MM-DD format.';
            }

        } // trackDate

        // Make sure the name isn't blank
        if (attrs.itemName === '') {
            return 'Food name cannot be blank.';

        } // itemName

    }, // validate

    /** Multiplies value attributes by number of servings */
    valueUpdate: function(attributes, num) {
        var keys = [
            'valueCalories',
            'valueFatCalories',
            'valueTotalFat',
            'valueSatFat',
            'valueTransFat',
            'valueCholesterol',
            'valueSodium',
            'valueTotalCarb',
            'valueFibers',
            'valueSugars',
            'valueProteins',
            'valueVitaminA',
            'valueVitaminC',
            'valueCalcium',
            'valueIron'
        ];
        var newListObj = _.pick(attributes, keys);
        var val = 0;
        var key = '';
        var newVal = 0;

        for (key in newListObj) {
            val = newListObj[key];

            // Check if the value is not falsy (0 or null)
            if(val) {
                newVal = val * num;

                // If not a whole number, show only 2 decimal places
                if( Number.isInteger(newVal) )
                    newListObj[key] = newVal;
                else
                    newListObj[key] = Number(newVal).toFixed(2);
            }

        } // for

        // Update the servings-template flag
        if(num > 1)
            newListObj['moreThanOne'] = true;
        else
            newListObj['moreThanOne'] = false;

        newListObj['servingCount'] = num;

        // Update the values for the selected model attributes
        this.set(newListObj);

    } // valueUpdate

});
