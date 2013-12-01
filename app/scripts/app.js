'use strict';
var app = angular.module('thankfulApp', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ui.bootstrap'
]);

app.config(function ($routeProvider) {

  // initialize the oauth.io lib
  OAuth.initialize('kcvGCQdBDvMf0TvEwkxK2UE-22g');

  $routeProvider
    .when('/signin', {
      templateUrl: 'views/signin.html',
      controller: 'SigninCtrl'
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/post', {
      templateUrl: 'views/post.html',
      controller: 'PostCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

//settings
//directive contenteditable - with placeholder
app.directive('contenteditable', function() {
    return {
      restrict: 'A', // only activate on element attribute
      require: '?ngModel', // get a hold of NgModelController
      link: function(scope, element, attrs, ngModel) {
        if(!ngModel) return; // do nothing if no ng-model
 
        // Specify how UI should be updated
        ngModel.$render = function() {
          element.html(ngModel.$viewValue || attrs.placeholder || '');
        };
 
        // Listen for change events to enable binding
        element.on('blur keyup change', function() {
          scope.$apply(read);
        });

        element.on('click', function() {
          if (element.html()==attrs.placeholder) {
            element.html('');
          }
        })
        
        // Write data to the model
        function read() {
          var html = element.html();
          // When we clear the content editable the browser leaves a <br> behind
          // If strip-br attribute is provided then we strip this out
          if( attrs.stripBr && html == '<br>' ) {
            html = '';
          }
          ngModel.$setViewValue(html);
        }
      }
    };
  });