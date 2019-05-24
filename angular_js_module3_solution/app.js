(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  function FoundItems(){
    return {
      restrict: "E",
      templateUrl: 'found_items.html',
      scope:{
        foundItems: '<',
        onRemove: '&'
      }
      // controller: MenuItemsController,
      // controllerAs: 'menuList',
      // bindToConroller: true
    };
  }

  function MenuItemsController(){}

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService){
    var narrow_it_down_ctrl = this;
    narrow_it_down_ctrl.notice = {
      show: false,
      msg: ""
    }
    narrow_it_down_ctrl.search_term = "";

    function setNotice(msg){
      if(msg && msg.length > 0){
        narrow_it_down_ctrl.notice.msg = msg;
        narrow_it_down_ctrl.notice.show = true;
      }else{
        narrow_it_down_ctrl.notice.msg = "";
        narrow_it_down_ctrl.notice.show = false;
      }
    }
    // narrow_it_down_ctrl.matchedItems = MenuSearchService.getMatchedMenuItems();
    narrow_it_down_ctrl.get_and_narrow = function(){
      if(narrow_it_down_ctrl.search_term.length > 0){
        var promise = MenuSearchService.getMatchedMenuItems(narrow_it_down_ctrl.search_term);
        console.log(promise);
        promise.then(function(result){
          narrow_it_down_ctrl.found = result;
          if(narrow_it_down_ctrl.found.length > 0){
            setNotice();
            console.log(narrow_it_down_ctrl.notice.msg);
          }else{
            setNotice("Nothing Found");
            console.log(narrow_it_down_ctrl.notice.msg);
          }
        }).catch(function(error){
          console.log(error);
        });
      }else{
        narrow_it_down_ctrl.found = [];
        setNotice("Nothing Found");
        console.log(narrow_it_down_ctrl.notice.msg);
      }
    }

    narrow_it_down_ctrl.remove_item = function(index){
      narrow_it_down_ctrl.found.splice(index,1);
    }
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath){
    var service = this;

    service.getMatchedMenuItems = function(search_term){
      return $http({
        method: 'GET',
        url: (ApiBasePath + "/menu_items.json")
      }).then(function(result){
        var foundItems = result.data.menu_items;
        console.log(foundItems);
        foundItems = foundItems.filter(function(elem){
          return elem.description.toLowerCase().includes(search_term.toLowerCase());
        });
        return foundItems;
      });
    };
  }
})();
