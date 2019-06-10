(function(){
  'use strict';

  angular.module('MenuApp')
    .controller('SpinnerCtrl', SpinnerCtrl)
    .component('spinner', {
      templateUrl: "./src/templates/spinner_component.template.html",
      controller: 'SpinnerCtrl'
    })

  SpinnerCtrl.$inject = ['$rootScope'];

  function SpinnerCtrl($rootScope){

    var $ctrl = this;
    var cancelers = [];

    $ctrl.display = false;


    cancelers.push($rootScope.$on('$stateChangeStart',function(){
      $ctrl.display = true;
    }))

    cancelers.push($rootScope.$on('$stateChangeSuccess', function(){
      $ctrl.display = false;
    }))

    $ctrl.$onDestroy = function(){
      for(canceler in cancelers){
        canceler();
      }
    }
  }
})();
