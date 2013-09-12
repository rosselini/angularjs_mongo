requirejs.config({
    "baseUrl": "js/app",
    paths: {
        "angular": "../lib/angular/angular.min",
        "underscore": "../lib/underscore/underscore-min"
    },
    shim: {
        "angular": {
            exports: "angular"    
        },
        "underscore": {
            exports: "_"   
        }
    }
});

// Load the main app module to start the app
requirejs([
    'angular', 
    'app', 
    'controller/homeController', 
    'controller/showController',
    'controller/addController'
    ], function(angular, app) {
    app.config(function($routeProvider) {
        $routeProvider
        .when('/', {
          templateUrl: './js/view/home.html',
          controller: 'homeController'
        })
        .when('/contact/:id/view', {
            templateUrl: './js/view/show.html',
            controller: 'showController'
        })
        .when('/contact/add', {
            templateUrl: './js/view/add.html',
            controller: 'addController'
        });
      }
    );
    
    angular.bootstrap(document,["myApp"]);
});