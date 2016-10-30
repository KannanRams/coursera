(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
$scope.lunchitems = "";
$scope.items = 0;
$scope.result = "";

  $scope.checkFood = function () {
    if ($scope.lunchitems == ""){
      $scope.result = "Please enter data first";
      return;
    }

    $scope.items = splitString($scope.lunchitems, ",");

if ($scope.items <= 0){
  $scope.result = "Please enter data first";
}
else if ($scope.items < 4) {
    $scope.result = "Enjoy";
  }
else if ($scope.items > 3) {
  $scope.result = "Too much!";
}
  };
}
  function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  var filterEmptyStrings = arrayOfStrings.filter(function(v){return v.trim() !==''});
  return filterEmptyStrings.length;
}

})();
