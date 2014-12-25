'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router'])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'home.html'
	});
	
	$stateProvider.state('projects', {
		url: '/projects',
		templateUrl: 'projects.html'
	});
	
	$stateProvider.state('services', {
		url: '/services',
		templateUrl: 'services.html'
	});
	
	$stateProvider.state('downloads', {
		url: '/downloads',
		templateUrl: 'downloads.html'
	});
	
	$stateProvider.state('about', {
		url: '/about',
		templateUrl: 'about.html'
	});
	
	$stateProvider.state('contact', {
		url: '/contact',
		templateUrl: 'contact.html'
	});
  
}]);