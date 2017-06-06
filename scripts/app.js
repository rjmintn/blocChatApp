(function() {
  angular
    .module('blocChat', ['ngCookies', 'ui.bootstrap', 'ui.router', 'firebase'])
    .config(config);
  /**
   * @ngdoc Main application
   * @name
   * @description
   * All the fun starts here
   *
   */

  function config($locationProvider, $stateProvider, $cookiesProvider) {
    var urlPrefix = window.location.pathname;
  var prefix = urlPrefix ? urlPrefix : '';
  console.log (prefix);
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('home', {
        url: prefix,
        controller: 'HomeCtrl2 as home',
        templateUrl: 'templates/home.html'
      });
      // .state('chatArea', {
      //   // url: '#chatArea',
      //   controller: 'HomeCtrl2 as home',
      //   templateUrl: 'templates/chatArea.html'
      // });
      $cookiesProvider.defaults.secure = false;
  }


})();
