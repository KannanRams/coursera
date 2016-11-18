(function(){
'use strict';

  angular.module('MenuApp')
    .component('categories', {

      templateUrl: 'src/components/categories.component.template.html',
      bindings: {
              items: '<'
            }
  });

})();
