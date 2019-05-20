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
    to_buy_ctrl.to_buy_items = ShoppingListCheckOffService.get_to_buy_items();
    to_buy_ctrl.setAsBought = ShoppingListCheckOffService.setAsBought;
  }

  function AlreadyBoughtCtrl(ShoppingListCheckOffService){
    var already_bought_ctrl = this;
    already_bought_ctrl.bought_items = ShoppingListCheckOffService.get_bought_items();
  }

  function ShoppingListCheckOffService(){
    var service = this;
    var to_buy_items = [{name: 'Cookies', quantity: 100}, {name: 'Milk', quantity: 2}, {name: 'Chocolate', quantity: 5}, {name: 'Teapot', quantity: 1}, {name: 'Keyboard', quantity:1}];
    var bought_items = [];

    service.get_to_buy_items = function(){
      return to_buy_items;
    }
    service.get_bought_items = function(){
      return bought_items;
    }

    service.setAsBought = function(index){
      var bought_item = to_buy_items.splice(index, 1)[0];
      bought_items.push(bought_item);
    }
  }
})();
