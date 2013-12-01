'use strict';
angular.module('thankfulApp')
.controller('PostCtrl', function ($scope, $rootScope, $location, ThankYou) {
	
    $scope.model = {
          to: "",
          from: getFrom(),
          text: "",
          image: "_2.jpg"
    }

    function getFrom() {
      if ($rootScope.loggedIn)
        return $rootScope.user.name;
      else
        return "Once people login this auto fills";
    }

    $scope.save = function() {
        var thankyou = new ThankYou($scope.model);
        thankyou.$save().then(function(resource) {
           $location.path('/home');
        });
    };

    // $scope.edit = function(id) {
    //     ThankYou.query({thank_id:id}, function(thankyou)
    //     {
    //         $scope = thankyou;
    //     });
    // }

});
