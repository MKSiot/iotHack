angular.module('neighborhoodwatch.newuser', [])

.controller('newuser', function($scope, $state, Users) {

  $scope.home = function() {
    $state.go('home');
  };

  $scope.userInfo = {};

  $scope.submit= function() {
    Users.createUser($scope.userInfo)
      .then(function(data) {
        $window.localStorage.setItem(data.token);
        $state.go('video');
      });
  };

});