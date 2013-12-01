'use strict';

describe('Controller: ThankYou', function () {

  beforeEach(module('thankfulApp'));

  var prefix = '/api/0.5';

  // ensure we have some data 
  beforeEach(module('myApp', 'ngMockE2E'));

  beforeEach(inject(function($injector) {
    settings = $injector.get('settings');
    settings.apiHost = "http://localhost:8080";
    //$httpBackend.when('GET', prefix +'/thanks').respond(testData.thanks);
    prefix = "http://localhost:8080/api/0.5";
  }));

  afterEach(function() {
    //$httpBackend.verifyNoOutstandingExpectation();
    //$httpBackend.verifyNoOutstandingRequest();
  });

  it('should see some thanks defined' , inject(function(ThankYou) {
      //$httpBackend.expectGET(prefix + '/thanks');
      $httpBackend.whenGET(prefix + '/thanks').passThrough();
        
      ThankYou.query({}, function (thanks) {
         expect(thanks).toBeDefined();
         //expect(thanks[0].to).toEqual(testData.thanks[0].to);
         //expect(thanks[1].text).toEqual(testData.thanks[1].text);
         //expect(thanks[0]._id).toEqual(0);
      });
      //$httpBackend.flush();
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
