(function(){
  'use strict';

  angular.module('MenuApp')
    .controller('CategoryItemsController', CategoryItemsController);


  CategoryItemsController.$inject = ['$stateParams','items'];

  function CategoryItemsController($stateParams,items){
    var categoryItemsCtrl = this;

    categoryItemsCtrl.items_list = items;
    categoryItemsCtrl.short_name = $stateParams.short_name;
  }
})();
