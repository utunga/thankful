'use strict';
angular.module('thankfulApp')
.controller('SigninCtrl', function ($scope, $http, $rootScope) {

    $rootScope.user = $rootScope.user || {};

    $scope.signinFacebook = function () {

      OAuth.popup('facebook', function(err, result) { // or OAuth.callback
        if (err)
        {

        }
        else 
        {
          $rootScope.loggedIn = true;
          // call the API with the jQuery's $.ajax style:
          result.get('/me').done(function(data) {
            
            $rootScope.user.name = data.name;
            $rootScope.user.facebook = data; 
            $rootScope.$apply();
            // data is the API call's response. e.g. data.name for your facebook's fullname.
          });
        };
      });
    };

    $scope.signinTwitter = function () {

      OAuth.popup('twitter', function(err, result) { // or OAuth.callback
        
        if (err)
        {

        }
        else 
        {

          $rootScope.loggedIn = true;

          result.get('/1.1/account/verify_credentials.json')
          .done(function(data) {

                $rootScope.user.name = data.name;
                $rootScope.user.twitter = data; 
                $rootScope.$apply();
          });
          
        };
      });

    };

});