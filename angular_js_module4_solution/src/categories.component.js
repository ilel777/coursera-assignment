(function(){
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'src/templates/categories_component.template.html',
      bindings:{
        categoriesList: '<'
      }
    });

})();
