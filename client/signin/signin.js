angular.module('neighborhoodwatch.signin', [])

.controller('signin', function($scope, $state, Users) {

  $scope.user = {};
  $scope.message = '';

  $scope.submit = function() {
    Users.login(user)
      .then(function(data) {
        if(data.status === 400) {
          $scope.message = data.data;
        } else {
          $window.localStorage.setItem(data.token);
          $state.go('video');
        }
      });
  };

});