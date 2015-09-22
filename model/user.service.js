/**
 * Created by anneb_000 on 21/09/2015.
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


 /* var service = {};

  service.getUser = function(id) {
    return $http.get(BaseService.urlBase + "/user/" + id);
  };

  service.getUsers = function (data) {
    return $http.get(BaseService.urlBase + "/users/", {
      params: data
    });
  };
  service.setUsers = function (data) {
    return $http.put(BaseService.urlBase + "/user/" + data._id, data);
  };

  service.deleteUser = function(data) {
    return $http.delete(BaseService.urlBase + "/user/" + data._id, data);
  }

  return service;
} */

angular.module('beecambioBo').factory('UserService', UserService);
