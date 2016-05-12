angular.module('neighborhoodwatch.userServices', [])

.factory('Users', ['$http', function($http) {

  var users = {};

  users.createUser = function(userData) {
    return $http({
      method: 'POST',
      url: '',
      data: userData
    })
    .then(function(data) {
      return data.data;
    }, function(err) {
      return err;
    });
  };

  users.login = function(userData) {
    return $http({
      method: 'POST',
      url: '',
      data: userData
    })
    .then(function(data) {
      return data.data;
    }, function(err) {
      return err;
    })
  };

  return users;

}]);