(function () {
'use strict';
//#6 create categories.component.js
//#8 One way bind categories with '<'
angular.module('MenuApp')
.component('categories', {
  templateUrl: 'template/categories.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
