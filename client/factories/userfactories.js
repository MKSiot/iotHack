angular.module('neighborhoodwatch.userServices', [])

.factory('Users', ['$http', function($http) {

  var users = {};

  users.createUser = function(userData) {
    console.log('');
    console.log('userData: ', userData);
    console.log('');
    return $http({
      method: 'POST',
      url: '/api/users/addNewUser',
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
      url: '/api/signIn',
      data: userData
    })
    .then(function(data) {
      return data.data;
    }, function(err) {
      return err;
    });
  };

  return users;

}]);