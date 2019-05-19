(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyCtrl)
    .controller('AlreadyBoughtController', AlreadyBoughtCtrl)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyCtrl.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtCtrl.$inject = ['ShoppingListCheckOffService'];

  function ToBuyCtrl(ShoppingListCheckOffService){
    var to_buy_ctrl = this;
    to_buy_ctrl.to_buy_items = ShoppingListCheckOffService.to_buy_items;
    to_buy_ctrl.bought_items = ShoppingListCheckOffService.bought_items;
    to_buy_ctrl.setAsBought = ShoppingListCheckOffService.setAsBought;
  }

  function AlreadyBoughtCtrl(ShoppingListCheckOffService){
    var already_bought_ctrl = this;
    already_bought_ctrl.bought_items = ShoppingListCheckOffService.bought_items;
  }

  function ShoppingListCheckOffService(){
    var service = this;
    service.to_buy_items = ['Cookies', 'Milk', 'Chocolate', 'Teapot', 'Keyboard'];
    service.bought_items = [];

    service.setAsBought = function(index){
      var bought_item = service.to_buy_items.splice(index, 1)[0];
      service.bought_items.push(bought_item);
      console.log(service.to_buy_items);
      console.log(service.bought_items);
    }
  }
})();
