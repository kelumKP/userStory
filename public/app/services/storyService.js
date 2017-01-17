/** 
                    
 * PROJECT            :  userstory
 * CREATED BY         :  KELUM PRIYADARSHANE 
 * CREATE DATE & TIME :  1/16/2017 - 8:47 PM
 * PURPOSE            :  
*/

angular.module('storyService',[])

.factory('Story', function($http) {

    var storyFactory = {};

    storyFactory.allStories = function() {
        return $http.get('/api/all_stories');
    }

    storyFactory.all = function() {
        return $http.get('/api/');
    }

    storyFactory.create = function(storyData) {
        return $http.post('/api/', storyData);
    }

    return storyFactory;

})

.factory('socketio', function($rootScope) {

    var socket = io.connect();
    return {
        on: function(eventName, callBack) {
            socket.on(eventName, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    callBack.apply(socket, args);
                });
            });

        },

        emit: function(eventName, data, callBack) {
            socket.emit(eventume, data, function() {
                var args = arguments;
                $rootScope.apply(function() {
                    if(callBack) {
                        callBack.apply(socket, args);
                    }
                });
            });
        }
    };
});