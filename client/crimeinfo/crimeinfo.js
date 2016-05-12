angular.module('neighborhoodwatch.crimeinfo', [])

.controller('crimeInfo', function($scope, $state) {

//type, additional comments, time, reported by, phoneNumber, zipcode
  $scope.stats = [{type: 'mugging', time: '7:15', reported: 'Anonymous', zip: 43244, add: 'Gun was used'}, {type: 'mugging', time: '7:15', reported: 'Anonymous', zip: 43244, add: 'Gun was used'}];

  $scope.crimeStats = function() {
    //grab crime stats from database, push to $scope.stats
  };

});