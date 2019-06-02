(function(){
  'use strict';

  angular.module('MenuApp')
    .component('items', {
      templateUrl: './src/templates/items_component.template.html',
      bindings:{
        items: '<'
      }
    });
})();
