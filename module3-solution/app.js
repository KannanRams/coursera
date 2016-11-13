(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
var ddo = {
restrict: 'E',
scope: {
  found: '<',
  onRemove: '&'
},
 // controller: NarrowItDownController,
 // controllerAs: 'list',
 // bindToController: true
 templateUrl: 'foundItems.html'
};

return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
      var list = this;
      list.found = [];

      list.message = '';

      list.getFilteredMenu =  function() {
      list.found = [];

      MenuSearchService.getMatchedMenuItems(list.searchTerm).then
      (function (searchComplete) {
        list.found = searchComplete;
      if (list.found.length === 0) {
        list.message = 'Nothing found';
      }
      else {
        list.message = null;
      }
    });
  }

  list.removeMenuItem = function(index){
    list.found.splice(index,1);
  }
}

MenuSearchService.$inject = ['$http', '$q', 'ApiBasePath'];
function MenuSearchService($http, $q, ApiBasePath) {
  var service = this;
  var result = [];
  var matching = [];

service.getMatchedMenuItems = function (searchTerm) {
  if (searchTerm == '')  {
    return $q.when([]);
  }

  result = [];
  matching = [];

return $http({
  method: "GET",
  url: (ApiBasePath + "/menu_items.json")
}).then(function (response) {
        result = response.data.menu_items;
        for (var i = 0; i < result.length; i++) {
          var description = result[i].description;
          if (description.toLowerCase().indexOf(searchTerm) !== -1) {
              matching.push(result[i]);
            }
          }
          return matching;
        }).catch(function (error) {
  console.log("error getting all data");
});

};

}

})();
