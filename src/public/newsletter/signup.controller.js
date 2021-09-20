(function(){
    'use strict';

    angular.module('public').controller('SignUpController', SignUpController);

    SignUpController.$inject = ['NewsletterService', 'MenuService'];
    function SignUpController(NewsletterService, MenuService){
        var signedup = this;
        signedup.message='';
   
        signedup.submit = function(){

            MenuService.getMenuItem(signedup.user.favoritedish).then(response => {
                signedup.user.favoritedishDetails = response;
                NewsletterService.setUser(signedup.user);
                signedup.message = 'Success!';
            })
            .catch(error => {
                signedup.message = 'Menu item not found!';
            })

        };


    };


}());