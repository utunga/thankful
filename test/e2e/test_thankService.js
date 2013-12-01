'use strict';

describe('Service: ThankYou', function () {

  
  // ensure we have some data 
  // (test_data.js needs to be included, and defines data there)
  beforeEach(function() {
      browser().navigateTo('../../app/index.html');
  });

  it('should return the complete list of thanks' , function() {
      //expect(element('#alerts').css('display')).toEqual('block')
      // ThankYou.query({}, function (thanks) {
      //    expect(thanks).toBeDefined();
      // });
  });

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
