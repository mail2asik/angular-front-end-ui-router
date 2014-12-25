Angular simple front-end apps using ui-router

Angularjs is flexible for Single Page Application(SPA). This post explains you that how we can perform navigating between one view to another view using ui-router module and Bootstrap for layouts. Please go to this post If you are intersted this demo using ngRoute module.

Source: http://angular-ui.github.io/ui-router/release/angular-ui-router.min.js

Dependent Module: ui.router

Router Provider: $urlRouterProvider, $stateProvider

Default View Config: $urlRouterProvider.otherwise('/home');

Router Config: 
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'home.html'
	});


View Directive: ui-view

Templates: Used In-line templates home.html, projects.html..etc., (Refer code)

Link Directive : ui-sref="home"  (here 'home' is a state, not url)