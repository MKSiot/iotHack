angular.module('neighborhoodwatch', ['ui.router', 'neighborhoodwatch.home', 'neighborhoodwatch.signin', 'neighborhoodwatch.newuser', 'neighborhoodwatch.crimeinfo'])

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
    })
    .state('video', {
      url: '/video',
      templateUrl: 'video/video.html',
      controller: 'video'
    })
    .state('crimeInfo', {
      url: '/crimeinfo',
      templateUrl: 'crimeinfo/crimeinfo.html',
      controller: 'crimeInfo'
    });

});