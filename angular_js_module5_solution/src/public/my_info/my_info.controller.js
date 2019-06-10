(function(){
  'use strict';

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserInfoService'];
  function MyInfoController(UserInfoService){
    var myInfoCtrl = this;

    myInfoCtrl.info = UserInfoService.getInfo();
    myInfoCtrl.noData = myInfoCtrl.info ? false : true;
    console.log(myInfoCtrl.info);
  }
})();
