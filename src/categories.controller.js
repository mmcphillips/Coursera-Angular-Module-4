(function () {
'use strict';
//declare dependencies on MenuApp
angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);
//inject categories from state
CategoriesController.$inject = ['categories']
function CategoriesController(categories) {

  var categoriesDetail = this;
  categoriesDetail.categories = categories;
}

})();
