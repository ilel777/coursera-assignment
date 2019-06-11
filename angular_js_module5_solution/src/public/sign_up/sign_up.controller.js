(function(){
  'use strict';

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'UserInfoService'];

  function SignUpController(MenuService, UserInfoService){
    var signUpCtrl = this;

    signUpCtrl.user = {
    };
    signUpCtrl.submited = false;


    signUpCtrl.submit = function(){
      signUpCtrl.submited = true;
      signUpCtrl.itemNotFound = false;
      signUpCtrl.saved = false;
      if(signUpCtrl.fav_dish_number){
        MenuService.getDish(signUpCtrl.fav_dish_number)
          .then(function(response){
            console.log(response)
              signUpCtrl.itemNotFound = false;
              signUpCtrl.user.fav_dish = response;
              console.log(signUpCtrl.user.fav_dish)
              UserInfoService.setInfo(signUpCtrl.user);
              signUpCtrl.saved = true;
          })
          .catch(function(error){
            console.log('error')
              console.log("no such category");
              signUpCtrl.itemNotFound = true;
          })
      }
    }
  }
})();
