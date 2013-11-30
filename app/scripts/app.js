'use strict';
angular.module('thankfulApp', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ui.bootstrap'
])
.config(function ($routeProvider) {

  // initialize the oauth.io lib
  OAuth.initialize('kcvGCQdBDvMf0TvEwkxK2UE-22g');

  $routeProvider
    .when('/signin', {
      templateUrl: 'views/signin.html',
      controller: 'SigninCtrl'
    })
    .when('/post', {
      templateUrl: 'views/post.html',
      controller: 'PostCtrl'
    })
    .otherwise({
      redirectTo: '/post'
    });
});
