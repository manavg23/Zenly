// Setup Nutrition Tracker app when DOM is ready
$(document).ready(function() {
    // Instantiate the Router
    nt.Router.Instance = new nt.Router();

    // Instantiate Models and Collections
    nt.Models.nutrition    = new nt.Models.Nutrition();
    nt.Collections.suggest = new nt.Collections.AutocompleteSearch();
    nt.Collections.results = new nt.Collections.FoodSearch();
    nt.Collections.recipes = new nt.Collections.RecipeSearch();
    nt.Collections.tracker = new nt.Collections.NutritionTracker();

    // Instantiate the autocomplete plugin
    nt.Plugin.Typeahead = Backbone.Typeahead.extend({ template: Handlebars.Templates.search });
    nt.Plugin.Instance = new nt.Plugin.Typeahead({ collection: nt.Collections.suggest, key: 'text' });
    nt.Plugin.Instance.setElement('#search-suggest').render();

    // Instantiate Views
    nt.Views.start     = new nt.Views.Start();
    nt.Views.tabs      = new nt.Views.TabNav();
    nt.Views.search    = new nt.Views.Search({ collection: nt.Collections.results });
    nt.Views.recipe    = new nt.Views.Recipe({ collection: nt.Collections.recipes });
    nt.Views.nutrition = new nt.Views.Nutrition({ model: nt.Models.nutrition });
    nt.Views.tracker   = new nt.Views.Tracker({ collection: nt.Collections.tracker });

    // Start route history and navigate to the start screen
    Backbone.history.start();
    nt.Router.Instance.goto('start');
});

