(function () {
  'use strict';
//#9 Create routs.js file and configure the routes and associated states defined within menuapp.module.js
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
//redirect to home
  $urlRouterProvider.otherwise('/');

// set up additional UI states
$stateProvider
//home State referenced by otherwise function
.state('home', {
  url: '/',
  templateUrl: 'template/home.template.html'
})
//category state ui-sref clicked. Should be first state accessed in order to reach items state
.state('categories', {
  url: '/categories',
  templateUrl: 'template/categories.template.html',
  controller: 'CategoriesController as catControl',
  resolve: {
    categories: ['MenuDataService', function(MenuDataService) {
      return MenuDataService.getAllCategories().then(function(response) {
        return response.data;
      });
    }]
  }
})

//items state after ui-sref clicked
.state('items', {
  url: '/items/{category}',
  templateUrl: 'template/items.template.html',
  controller: 'ItemsController as itControl',
  resolve: {
    items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
      return MenuDataService.getItemsForCategory($stateParams.category).then(function(response) {
        return response.data.menu_items;
      });
    }]
  }
})
;
}

})();
