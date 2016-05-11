angular.module('neighborhoodwatch.newuser', [])

.controller('newuser', function($scope, $state) {

  $scope.home = function() {
    $state.go('home');
  };

  $scope.username='';

  $scope.password ='';

  $scope.zipCode='';

  $scope.phone='';

  $scope.submit= function() {
    console.log($scope.username, $scope.password, $scope.zipCode, $scope.phone);
  };

});