(function() {
  "use strict";

// console.log('inside myInfoCtrl');

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['user', 'dish', 'ApiPath'];
  function MyInfoController(user, dish, ApiPath) {
    var $ctrl = this;

 // console.log('ApiPath :' + ApiPath);

    $ctrl.dish = dish;
    $ctrl.user = user;
    $ctrl.basePath = ApiPath;

    $ctrl.displayInfo = displayInfo;

    function displayInfo() {
      var info = (typeof($ctrl.user) == 'undefined');
      return !info;
    }
  }

})();
