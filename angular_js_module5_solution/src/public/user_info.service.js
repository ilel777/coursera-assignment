(function(){
  'use strict';

  angular.module('public')
    .service('UserInfoService', UserInfoService);

  function UserInfoService(){
    var service = this;

    service.setInfo = function(info){
      service.user_info = info;
      console.log(service.user_info);
    }

    service.getInfo = function(info){
      return service.user_info;
    }
  }
})();
