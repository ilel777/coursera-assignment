(function(){
  'use strict';

  angular.module('Data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath){
    var service = this;

    console.log("inside menu data service")
    service.getAllCategories = function(){
      console.log("inside getAllCategories function")
      return $http({
        method: 'GET',
        url: (ApiBasePath + "/categories.json")
      }).then(function(result){
        return result.data;
      });
    }

    service.getItemsForCategory = function(category){
      console.log("inside getItemForCategories function")
      return $http({
        method: 'GET',
        url: (ApiBasePath + "/menu_items.json?category=" + category)
      }).then(function(result){
        console.log(result)
        return result.data.menu_items;
      });
    }
  }
})();
