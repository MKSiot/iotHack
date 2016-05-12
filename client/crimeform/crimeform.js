
  angular.module('neighborhoodwatch.crimeform', [])
  .controller('crimeform', ['$scope','Crimes', '$state', function($scope, Crimes, $state){

    $scope.formData = {};

    //current user info
    $scope.reportedBy = 'Ting';

    $scope.type = '';
    $scope.message = '';
    $scope.zipCode = 94017;
    $scope.phoneNumber = 4158919922;

    $scope.submit = function(){
      Crimes.addNewCrime({
        type : $scope.type,
        message : $scope.message,
        // time : Date.now(),
        reportedBy : $scope.reportedBy,
        phoneNumber : $scope.phoneNumber,
        zipCode : $scope.zipCode,

      }, function(result){
        console.log(result);
      });

      $state.go('video');

    }
  }]);