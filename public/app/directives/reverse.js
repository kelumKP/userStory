/** 
                    
 * PROJECT            :  userstory
 * CREATED BY         :  KELUM PRIYADARSHANE 
 * CREATE DATE & TIME :  1/17/2017 - 9:25 PM
 * PURPOSE            :  
*/

angular.module('reverseDirective',[])

.filter('reverse', function() {

    return function(items) {
        return items.slice().reverse();
    }
});
