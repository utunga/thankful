var app = angular.module('thankfulApp') //, ['jqm','ngResource', 'fakeBackEnd']);

app.service("settings", function($rootScope) {
    this.apiVersion = '0.5'; 
});

// projects service used for projects REST endpoint (dependant on $resource)
app.factory("thankService", function($resource, settings) {
  return $resource('/api/'+ settings.apiVersion + '/thanks/:thank_id', {thank_id:'@id'});
});

// // traps service used for traps REST endpoint (dependant on $resource)
// app.factory("Traps", function($resource) {
//   return $resource('/project/:projectID/trap/:trapID', {projectID:'@projectID', trapID: '@id'});
// });