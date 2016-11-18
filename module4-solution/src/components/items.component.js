(function() {
  'use strict';

  angular.module('MenuApp')
    .component('items', {
      templateUrl: 'src/components/items.component.template.html',
      bindings: {
        items: '<'
      }
    });

})();
