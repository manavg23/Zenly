Handlebars.registerPartial("servings-partial", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " × "
    + container.escapeExpression(((helper = (helper = helpers.servingCount || (depth0 != null ? depth0.servingCount : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"servingCount","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.valueServingSize || (depth0 != null ? depth0.valueServingSize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueServingSize","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.valueServingSizeUnit || (depth0 != null ? depth0.valueServingSizeUnit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueServingSizeUnit","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.moreThanOne : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["Templates"] = this["Handlebars"]["Templates"] || {};
this["Handlebars"]["Templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <p><button id=\"nutrition-track\" type=\"button\" class=\"btn btn-warning btn-xs btn-block\">\r\n        <i class=\"glyphicon glyphicon-ok-circle\"></i> Tracking\r\n        </button></p>\r\n        <button id=\"nutrition-close\" type=\"button\" class=\"btn btn-primary btn-sm\">\r\n        <i class=\"glyphicon glyphicon-arrow-left\"></i> Back\r\n        </button>\r\n        <button id=\"nutrition-add\" type=\"button\" class=\"btn btn-info btn-sm\">\r\n        <i class=\"glyphicon glyphicon-pencil\"></i> Edit\r\n        </button>\r\n        <button id=\"nutrition-remove\" type=\"button\" class=\"btn btn-danger btn-sm\">\r\n        <i class=\"glyphicon glyphicon-remove\"></i> Remove\r\n        </button>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <p><button type=\"button\" class=\"btn btn-default btn-xs btn-block\" disabled>\r\n        <i class=\"glyphicon glyphicon-ban-circle\"></i> Not Tracking\r\n        </button></p>\r\n        <button id=\"nutrition-close\" type=\"button\" class=\"btn btn-primary btn-sm\">\r\n        <i class=\"glyphicon glyphicon-arrow-left\"></i> Back\r\n        </button>\r\n        <button id=\"nutrition-add\" type=\"button\" class=\"btn btn-success btn-sm\">\r\n        <i class=\"glyphicon glyphicon-plus\"></i> Add\r\n        </button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"buttons\">\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.tracking : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>";
},"useData":true});
this["Handlebars"]["Templates"]["editor"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div id=\"editor-top\">\r\n      <h3>Food Summary</h3>\r\n      <span id=\"foodClose\" class=\"glyphicon glyphicon-remove-circle\"></span>\r\n    </div>\r\n    <br>\r\n    <form>\r\n      <div class=\"input-group date\" id=\"dateTimePicker\">\r\n        <span class=\"input-group-addon\">Track Date</span>\r\n        <input type=\"text\" class=\"form-control\" id=\"foodTrackDate\" value=\""
    + alias4(((helper = (helper = helpers.trackDate || (depth0 != null ? depth0.trackDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trackDate","hash":{},"data":data}) : helper)))
    + "\">\r\n        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\r\n      </div>\r\n      <br>\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\">Name</span>\r\n        <input type=\"text\" class=\"form-control\" id=\"foodName\" value=\""
    + alias4(((helper = (helper = helpers.itemName || (depth0 != null ? depth0.itemName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemName","hash":{},"data":data}) : helper)))
    + "\">\r\n      </div>\r\n      <br>\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon calories-addon\">Calories</span>\r\n        <input disabled type=\"text\" class=\"form-control\" id=\"foodCalories\" value=\""
    + alias4(((helper = (helper = helpers.valueCalories || (depth0 != null ? depth0.valueCalories : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueCalories","hash":{},"data":data}) : helper)))
    + " kcal\">\r\n      </div>\r\n      <br>\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon fat-addon\">Fat</span>\r\n        <input disabled type=\"text\" class=\"form-control\" id=\"foodFat\" value=\""
    + alias4(((helper = (helper = helpers.valueTotalFat || (depth0 != null ? depth0.valueTotalFat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueTotalFat","hash":{},"data":data}) : helper)))
    + " g\">\r\n      </div>\r\n      <br>\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon carbs-addon\">Carbohydrates</span>\r\n        <input disabled type=\"text\" class=\"form-control\" id=\"foodCarbs\" value=\""
    + alias4(((helper = (helper = helpers.valueTotalCarb || (depth0 != null ? depth0.valueTotalCarb : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueTotalCarb","hash":{},"data":data}) : helper)))
    + " g\">\r\n      </div>\r\n      <br>\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon protein-addon\">Protein</span>\r\n        <input disabled type=\"text\" class=\"form-control\" id=\"foodProtein\" value=\""
    + alias4(((helper = (helper = helpers.valueProteins || (depth0 != null ? depth0.valueProteins : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueProteins","hash":{},"data":data}) : helper)))
    + " g\">\r\n      </div>\r\n      <br>\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon serving-addon\">Serving</span>\r\n        <input disabled type=\"text\" class=\"form-control\" id=\"foodServingSize\" value=\""
    + ((stack1 = container.invokePartial(partials["servings-partial"],depth0,{"name":"servings-partial","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\">\r\n        <input type=\"hidden\" id=\"foodServingCount\" value=\""
    + alias4(((helper = (helper = helpers.servingCount || (depth0 != null ? depth0.servingCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"servingCount","hash":{},"data":data}) : helper)))
    + "\">\r\n        <span class=\"input-group-btn\">\r\n          <button id=\"servingIncrease\" class=\"btn\" type=\"button\"><i class=\"glyphicon glyphicon-triangle-top\"></i></button>\r\n          <button id=\"servingDecrease\" class=\"btn\" type=\"button\"><i class=\"glyphicon glyphicon-triangle-bottom\"></i></button>\r\n        </span>\r\n      </div>\r\n      <br>\r\n      <button id=\"foodSave\" type=\"submit\" class=\"btn btn-default btn-block\">Save Food</button>\r\n    </form>";
},"usePartial":true,"useData":true});
this["Handlebars"]["Templates"]["item"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"item\">\r\n      <h4><a class=\"item-nutrition\" href=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-item=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></h4>\r\n      <h6>Cals: "
    + alias4(((helper = (helper = helpers.calories || (depth0 != null ? depth0.calories : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"calories","hash":{},"data":data}) : helper)))
    + " | Fat: "
    + alias4(((helper = (helper = helpers.fat || (depth0 != null ? depth0.fat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fat","hash":{},"data":data}) : helper)))
    + "g | Carbs: "
    + alias4(((helper = (helper = helpers.carbs || (depth0 != null ? depth0.carbs : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"carbs","hash":{},"data":data}) : helper)))
    + "g | Prot: "
    + alias4(((helper = (helper = helpers.protein || (depth0 != null ? depth0.protein : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"protein","hash":{},"data":data}) : helper)))
    + "g</h6>\r\n      <h6>Serving: "
    + alias4(((helper = (helper = helpers.servingSize || (depth0 != null ? depth0.servingSize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"servingSize","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.servingUnit || (depth0 != null ? depth0.servingUnit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"servingUnit","hash":{},"data":data}) : helper)))
    + "</h6>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <h4 id=\"recipe-open\">\r\n      <span class=\"label label-info\"><i class=\"glyphicon glyphicon-info-sign\"></i> Recipe Suggestions</span>\r\n    </h4>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <footer class=\"logo\">\r\n      <a href=\"http://www.nutritionix.com/api\" target=\"_blank\"><img src=\"images/nutritionix.png\" alt=\"Powered By Nutritionix\"></a>\r\n    </footer>";
},"useData":true});
this["Handlebars"]["Templates"]["recipe"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"recipe-item\">\r\n      <h4>"
    + alias4(((helper = (helper = helpers.recipeTitle || (depth0 != null ? depth0.recipeTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recipeTitle","hash":{},"data":data}) : helper)))
    + "</h4>\r\n      <div class=\"r-container\">\r\n        <div class=\"r-image\">\r\n          <img class=\"thumb\" src=\""
    + alias4(((helper = (helper = helpers.recipeImage || (depth0 != null ? depth0.recipeImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recipeImage","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.recipeTitle || (depth0 != null ? depth0.recipeTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recipeTitle","hash":{},"data":data}) : helper)))
    + "\">\r\n        </div>\r\n        <div class=\"r-text\">\r\n          <img class=\"icon\" src=\""
    + alias4(((helper = (helper = helpers.siteIcon || (depth0 != null ? depth0.siteIcon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"siteIcon","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.siteTitle || (depth0 != null ? depth0.siteTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"siteTitle","hash":{},"data":data}) : helper)))
    + "\">\r\n          <a href=\""
    + alias4(((helper = (helper = helpers.siteLink || (depth0 != null ? depth0.siteLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"siteLink","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias4(((helper = (helper = helpers.siteTitle || (depth0 != null ? depth0.siteTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"siteTitle","hash":{},"data":data}) : helper)))
    + "</a>\r\n          <h6>"
    + alias4(((helper = (helper = helpers.numCalories || (depth0 != null ? depth0.numCalories : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numCalories","hash":{},"data":data}) : helper)))
    + " Calories Per Serving</h6>\r\n          <h6>"
    + alias4(((helper = (helper = helpers.numIngredients || (depth0 != null ? depth0.numIngredients : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numIngredients","hash":{},"data":data}) : helper)))
    + " Ingredients</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.recipes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <footer class=\"logo\">\r\n      <a href=\"https://developer.edamam.com\" target=\"_blank\"><img src=\"images/edamam.png\" alt=\"Powered By Edamam\"></a>\r\n    </footer>";
},"useData":true});
this["Handlebars"]["Templates"]["search"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"input-group\">\r\n    <input id=\"search-food\" type=\"search\" class=\"form-control\" placeholder=\"What did you eat?\">\r\n    <span class=\"input-group-btn\">\r\n      <button class=\"btn btn-default\" type=\"button\" id=\"search-clear\" title=\"Clear\">\r\n        <i class=\"glyphicon glyphicon-remove-circle\"></i>\r\n      </button>\r\n    </span>\r\n  </div>\r\n  <ul class=\"dropdown-menu\"></ul>";
},"useData":true});
this["Handlebars"]["Templates"]["tracked"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "        <tr class=\"tracked-row\""
    + alias3((helpers.title || (depth0 && depth0.title) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.trackDate : stack1),{"name":"title","hash":{},"data":data}))
    + ">\r\n          <td class=\"tracked-attr\"><a class=\"tracked-edit\" href=\"#edit\" data-item=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" title=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.itemName : stack1), depth0))
    + "\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.itemName : stack1), depth0))
    + "</a></td>\r\n          <td class=\"tracked-attr\">"
    + alias3((helpers.show || (depth0 && depth0.show) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.valueCalories : stack1),{"name":"show","hash":{},"data":data}))
    + "</td>\r\n          <td class=\"tracked-attr\">"
    + alias3((helpers.show || (depth0 && depth0.show) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.valueTotalFat : stack1),{"name":"show","hash":{},"data":data}))
    + "</td>\r\n          <td class=\"tracked-attr\">"
    + alias3((helpers.show || (depth0 && depth0.show) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.valueTotalCarb : stack1),{"name":"show","hash":{},"data":data}))
    + "</td>\r\n          <td class=\"tracked-attr\">"
    + alias3((helpers.show || (depth0 && depth0.show) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.valueProteins : stack1),{"name":"show","hash":{},"data":data}))
    + "</td>\r\n          <td class=\"tracked-attr\"><i class=\"tracked-delete glyphicon glyphicon-remove\" data-id=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" title=\"Delete\"></i></td>\r\n        </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <table class=\"tracked-item\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"tracked-first\">Food</th>\r\n          <th title=\"Calories\">Cals</th>\r\n          <th>Fat</th>\r\n          <th title=\"Carbohydrates\">Carbs</th>\r\n          <th title=\"Protein\">Prot</th>\r\n          <th class=\"tracked-last\"><i class=\"glyphicon glyphicon-remove\"></i></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.models : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\r\n      <tfoot>\r\n        <tr class=\"totals-row\">\r\n          <td class=\"totals-attr\">TOTALS</td>\r\n          <td class=\"totals-attr\">"
    + alias4(((helper = (helper = helpers.sumCals || (depth0 != null ? depth0.sumCals : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sumCals","hash":{},"data":data}) : helper)))
    + "</td>\r\n          <td class=\"totals-attr\">"
    + alias4(((helper = (helper = helpers.sumFat || (depth0 != null ? depth0.sumFat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sumFat","hash":{},"data":data}) : helper)))
    + "</td>\r\n          <td class=\"totals-attr\">"
    + alias4(((helper = (helper = helpers.sumCarbs || (depth0 != null ? depth0.sumCarbs : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sumCarbs","hash":{},"data":data}) : helper)))
    + "</td>\r\n          <td class=\"totals-attr\" colspan=\"2\">"
    + alias4(((helper = (helper = helpers.sumProt || (depth0 != null ? depth0.sumProt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sumProt","hash":{},"data":data}) : helper)))
    + "</td>\r\n        </tr>\r\n      </tfoot>\r\n    </table>";
},"useData":true});