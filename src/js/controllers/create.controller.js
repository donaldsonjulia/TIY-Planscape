angular.module('planscape').controller('CreateRouteController', function($state, $http, CreateRouteService) {

//* BELOW AJAX TEST FOR CONNECTING TO BACKEND, NOT RELATED TO APP */
  $http({
    method: 'GET',
    url: 'https://shielded-atoll-99970.herokuapp.com/'
  }).then(function successCallback(response) {
    console.log(response);
    }, function errorCallback(response) {
    console.log(response);
    });

//* ******************START CONTROLLER HERE******************************* */

this.states = CreateRouteService.states;


this.route = [];

this.location = {};

this.addLocation = function(location) {
    console.log(location);
    this.location = angular.copy(location);
    this.route.push(this.location);
};













});