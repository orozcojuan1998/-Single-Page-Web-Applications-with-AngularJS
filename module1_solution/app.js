(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.dishes = "";
  $scope.message = ""
  $scope.empty = false;

  $scope.checkDishes = function () {
    if($scope.dishes.trim() === 0){
      $scope.empty = true;
    }
    else{
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
