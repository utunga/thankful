'use strict';
angular.module('thankfulApp')
.controller('PostCtrl', function ($scope, $rootScope, $location, ThankYou) {
	
    // $scope.$watch(
    //   function() { return $location.path(); }, 
    //   function(newValue, oldValue){  
    //     if (!($rootScope.loggedIn) && newValue != '/signin')
    //     {  
    //         $location.path('/signin');  
    //     }
    //   });  

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

    $scope.nextBackground = function() {
      // assumes background image is of a format like '_23.jpg'
      var match = $scope.model.image.match(/_(\d*)\./);
      var next = (parseInt(match[1])+1);
      if (next>16) next = 0;
      $scope.model.image = "_" + next + ".jpg";
    }

    // $scope.edit = function(id) {
    //     ThankYou.query({thank_id:id}, function(thankyou)
    //     {
    //         $scope = thankyou;
    //     });
    // }

});
