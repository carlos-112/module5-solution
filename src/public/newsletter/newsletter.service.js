(function(){
    'use strict';

    angular.module('public').service('NewsletterService', NewsletterService);

    function NewsletterService() {
        var service = this;
        
        var user = [];

        service.setUser = function(userRecord){
            service.user = userRecord;
        };

        service.getUser = function() {
            return service.user;
        };

    }

})();