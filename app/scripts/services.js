var app = angular.module('thankfulApp') //, ['jqm','ngResource', 'fakeBackEnd']);

app.service("settings", function($rootScope) {
    this.apiVersion = '0.5'; 
    this.apiHost = ''; //http://localhost:8080';
    this.apiRoot = function() {
    	return this.apiHost + '/api/' + this.apiVersion;
    }
});

// projects service used for projects REST endpoint (dependant on $resource)
app.factory("ThankYou", function($resource, settings) {
  return $resource(settings.apiRoot() + '/thanks/:thank_id', {thank_id:'@id'});
});
