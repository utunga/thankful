'use strict';

describe('Controller: ThankYou', function () {

  beforeEach(module('thankfulApp'));

  var prefix = '/api/0.5';
  var $httpBackend;

  // ensure we have some data 
  // (test_data.js needs to be included, and defines data there)

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', prefix +'/thanks').respond(testData.thanks);
    var settings = $injector.get('settings');
    settings.apiHost = "";
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should return the complete list of thanks' , inject(function(ThankYou) {
      $httpBackend.expectGET(prefix + '/thanks');
      ThankYou.query({}, function (thanks) {
         expect(thanks).toBeDefined();
         expect(thanks[0].to).toEqual(testData.thanks[0].to);
         expect(thanks[1].text).toEqual(testData.thanks[1].text);
         //expect(thanks[0]._id).toEqual(0);
      });
      $httpBackend.flush();
  }));

  // it('should return a single thank for a get by dual id' , inject(function(thanks) {
  //     $httpBackend.expectGET('/project/0/thank/10');
  //     thanks.get({ projectID:0, thankID: 10}, function (thank) {
  //        expect(thank).toBeDefined();
  //        // can't do the following because thank has a bunch of special $resource methods added to it
  //        //expect(thank).toEqual(testData.thanks[0]);
  //        // so just check a few specific data points
  //        expect(thank.location).toEqual(testData.thanks[0].location);
  //        expect(thank.dateInstalled).toEqual(testData.thanks[0].dateInstalled);

  //     });
  //     $httpBackend.flush();
  // }));
  
});
