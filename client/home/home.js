angular.module('neighborhoodwatch.home', [])

.controller('homeScreen', function($scope, $state) {

  $scope.signIn = function() {
    
    $state.go('signIn');
  };

  $scope.signUp = function() {
    $state.go('newUser');
  };
  
});