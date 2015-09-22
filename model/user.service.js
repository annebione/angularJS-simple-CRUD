/**
 * Created by Anne Bione on 19/09/2015.
 */

function UserService () {

  var services = {};

  services.createUser = function ($resource) {
    return $resource('/users', {}, {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'}
    })
  };

  services.userFactory = function ($resource) {
    return $resource('/users/:id', {}, {
      show: {method: 'GET'},
      update: {method: 'PUT', params: {id: '@id'}},
      delete: {method: 'DELETE', params: {id: '@id'}}
    })
  };

};


angular.module('yourapp').factory('UserService', UserService);
