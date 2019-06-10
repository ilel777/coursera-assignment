(function(){
  'use strict';

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'UserInfoService'];

  function SignUpController(MenuService, UserInfoService){
    var signUpCtrl = this;

    signUpCtrl.user = {
      first_name: "ilel",
      last_name: "ulul",
      email: "ilel@ulul",
      phone: "333-444-3333"
    };
    signUpCtrl.fav_dish_category = "A";
    signUpCtrl.fav_dish_number = "2";
    signUpCtrl.submited = false;


    signUpCtrl.submit = function(){
      signUpCtrl.submited = true;
      signUpCtrl.itemNotFound = false;
      signUpCtrl.saved = false;
      if(signUpCtrl.fav_dish_category && signUpCtrl.fav_dish_number){
        console.log(signUpCtrl.fav_dish_category)
        MenuService.getMenuItems(signUpCtrl.fav_dish_category)
          .then(function(response){
            console.log(response)
            if(response.menu_items.length === 0){
              console.log("no such category");
              signUpCtrl.itemNotFound = true;
            }else{
              var fav_dish = response.menu_items.filter(function(item){
                return item.short_name === signUpCtrl.fav_dish_category + signUpCtrl.fav_dish_number;
              });

              if(fav_dish.length === 0){
                console.log("no such menu item");
                signUpCtrl.itemNotFound = true;
              }else{
                signUpCtrl.itemNotFound = false;
                signUpCtrl.user.fav_dish = fav_dish[0];
                console.log(signUpCtrl.user.fav_dish)
                UserInfoService.setInfo(signUpCtrl.user);
                signUpCtrl.saved = true;
              }
            }
          })
      }
    }
  }
})();
