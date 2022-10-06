/** Model for autocomplete search
 * @namespace nt.Models
 * @class nt.Models.Autocomplete
 * @memberof! <global>
 * @extends Backbone.Model */
nt.Models.Autocomplete = Backbone.Model.extend(/** @lends nt.Models.Autocomplete# */{

    /** Default attributes */
    defaults: {
        id: '',
        text: ''
    }

});