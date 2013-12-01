'use strict';
angular.module('thankfulApp')
.controller('HomeCtrl', function ($scope, ThankYou) {
	
    ThankYou.query({}, function (thanks) {
        $scope.thanks = thanks;
    });


    $scope.createSampleData = function() {
      var thankYou = new ThankYou(testData.thanks[0]);
      thankYou.$save();
      thankYou = new ThankYou(testData.thanks[1]);
      thankYou.$save();
      thankYou = new ThankYou(testData.thanks[2]);
      thankYou.$save();
    };

});
