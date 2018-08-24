(function () {
'use strict';
//#7 create items.component js and name component called items.
//#8 One way bind items with '<'
angular.module('MenuApp')
.component('items', {
  templateUrl: 'template/items.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
