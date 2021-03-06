// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var enki = angular.module('enki', [
  'ionic',
  'enki.auth',
  'enki.user',
  'enki.search',
  'enki.resource',
  'enki.services',
  'enki.elasticSearch'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

enki.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
  // $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
  })
   .state('tab.resource', {
    url: '/resource',
    views: {
      'tab-resource': { 
        templateUrl: 'js/resources/resource.html',
        controller: 'resourceController'
      }
    }
  })
  .state('tab.user', {
    url: "/user",
    views: {
      'tab-user': {
        templateUrl: "js/user/user.html",
        controller: 'userController'
      }  
    }
  })
  .state('login', {
      cache: false,
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'AuthController'
  })
  .state('signup', {
    url: "/signup",
    // views: {
    //   'login-signup': {
        templateUrl: "templates/signup.html",
        controller: "AuthController"
    //   }
    // }
  
  });
  
  $urlRouterProvider.otherwise('/login');
  $ionicConfigProvider.views.forwardCache(true);
});