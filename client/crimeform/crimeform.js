angular.module('neighborhoodwatch.crimeform', [])
  .controller('crimeform', ['$scope', '$state', 'Crimes', function($scope, $state, Crimes){

    $scope.formData = {};

    $scope.report = {};

    $scope.submit = function(){
      Crimes.addNewCrime(report);
      $state.go('video');
    };
    
  }]);
