(function() {
    'use strict';
    angular.module('LunchCheck', [])
         .controller('LCController', LCController);
  LCController.$inject = ['$scope'];
  function LLController($scope) {
  $scope.dishes = "";
  $scope.message = "";
  $scope.stat = false;


  $scope.checkLunch = function () {
    if($scope.dishes.trim() === 0){
      $scope.empty = true;
    }
    else{
      $scope.stat = true;
      $scope.empty = false;
      var allDishes = $scope.dishes.split(',');
      var allDishesTwo = allDishes.filter(function(t) {
                   return t.trim() !== '';
               });
      if(allDishesTwo.length <= 3){
        $scope.message = 'Enjoy!';
      }else{
        $scope.message = 'Too much!';
      }
    }
  };
}
})();
