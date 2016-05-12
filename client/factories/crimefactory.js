angular.module('neighborhoodwatch.crimeServices', [])
  .factory('Crimes', ['$http', function($http) {
    var crimes = {};

    crimes.getAllCrimes = function () {
      return $http({
        method: 'GET',
        url: '/api/crimes/getAllCrimes'
      })
      .then(function (res) {
        return res.data;
      }, function (res) {
        console.error('Error: ', res);
      });
    };

    crimes.addNewCrime = function (crime) {
      return $http({
        method: 'POST',
        url: '/api/crimes/addNewCrime',
        data: crime
      })
      .then(function (res) {
        return res.data;
      }, function (res) {
        console.error('Error: ', res);
      });
    };

    return crimes;
  }]);