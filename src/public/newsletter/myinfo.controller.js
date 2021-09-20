(function(){
    'use strict';

    angular.module('public').controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['user', 'ApiPath'];
    function MyInfoController(user, ApiPath){
        var myinfo = this;

        myinfo.basePath = ApiPath;

        myinfo.user = user;

    };


}());