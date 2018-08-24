(function() {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);
//inject http service
MenuDataService.$inject = ['$http'];

//service function
function MenuDataService($http) {
  var service = this;
//get request for categories.json
  this.getAllCategories = function() {
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    });
  }

// get items for category function
this.getItemsForCategory = function(categoryShortName) {
  return $http({
    method: 'GET',
    url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=',
    params: {category: categoryShortName}
  });
  }
}
})();
