angular.module('neighborhoodwatch', ['ui.router', 'neighborhoodwatch.home', 'neighborhoodwatch.signin'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.html',
      controller: 'homeScreen'
    })
    .state('signIn', {
      url: '/signin',
      templateUrl: 'signin/signin.html',
      controller: 'signin'
    })
    .state('newUser', {
      url: '/newuser',
      templateUrl: 'newuser/newuser.html',
      controller: 'newuser'
    });

});