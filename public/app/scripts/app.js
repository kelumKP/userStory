/**
 * Created by kelumputha on 11/28/2016.
 */

angular.module('MyApp', ['appRoutes','mainController', 'authService','userController', 'userService', 'storyService', 'storyController', 'reverseDirective'])
.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
})