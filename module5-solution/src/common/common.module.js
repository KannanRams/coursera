(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://kannanrams-spa.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
