/**

 * PROJECT            :  userstory
 * CREATED BY         :  KELUM PRIYADARSHANE
 * CREATE DATE & TIME :  11/28/2016 - 11:17 PM
 * PURPOSE            :
 */
angular.module('appRoutes', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/pages/home.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .when('/login', {
                templateUrl: 'app/views/pages/login.html'
            })
            .when('/signup', {
                templateUrl: 'app/views/pages/signup.html'
            })

            .when('/allStories', {
                templateUrl: 'app/views/pages/allStories.html',
                controller: 'AllStoriesController',
                controllerAs: 'story',
                resolve: {
                    stories: function(Story) {
                        return Story.allStories();
                    }
                }
            })

        $locationProvider.html5Mode(true);
    })