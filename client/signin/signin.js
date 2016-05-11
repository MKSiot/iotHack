angular.module('neighborhoodwatch.signin', [])

.controller('signin', function($scope, $state) {

  $scope.username = '';

  $scope.password = '';

  $scope.submit = function() {
    console.log($scope.username, $scope.password);
  };

});