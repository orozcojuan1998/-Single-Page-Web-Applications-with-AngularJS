(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.dishes = "";
  $scope.message = "";
  $scope.status = false;


  $scope.checkDishes = function () {
    if($scope.dishes.trim() === 0){
      $scope.empty = true;
    }
    else{
      $scope.status = true;
      $scope.empty = false;
      var allDishes = $scope.dishes.split(',');
      var dishes = allDishes.filter(function(t) {
                   return t.trim() !== '';
               });
      if(dishes.length <= 3){
        $scope.message = 'Enjoy!';
      }else{
        $scope.message = 'Too much!';
      }
    }
  };


});


})();
