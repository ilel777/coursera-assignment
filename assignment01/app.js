(function(){
    'use strict';

    angular.module('LunchChecker', [])
    .controller('LunchCheckerCtrl', LunchCheckerCtrl);


    LunchCheckerCtrl.$inject = ['$scope'];

    function LunchCheckerCtrl($scope){
      $scope.dishes_list = "";
      $scope.msg = "";

      $scope.showMsg = function (){
	var items_nb = getItemNb($scope.dishes_list);
	console.log(items_nb);
	$scope.color = "green"
	if(items_nb > 0 && items_nb <= 3){
	  $scope.msg = "Enjoy!";
	}
	else if(items_nb > 3){
	  $scope.msg = "Too much!";
	}
	else{
	  $scope.msg = "Please enter valid data first";
	  $scope.color = "red";
	}
      }

      function getItemNb(str){
	  window.console && console.log(str.split(','));
	  window.console && console.log(str.split(',').map(token => token.trim()));
	  window.console && console.log(str.split(',').map(token => token.trim()).filter(token => token.length>0));

	  return str.split(',').map(token => token.trim()).filter(token => token.length>0).length;
      }
    }
})()
