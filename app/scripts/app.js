'use strict';

/**
 * @ngdoc overview
 * @name mmxvApp
 * @description
 * # mmxvApp
 *
 * Main module of the application.
 */
angular
  .module('mmxvApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
