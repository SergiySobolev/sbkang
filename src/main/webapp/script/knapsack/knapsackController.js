(function (angular) {
    'use strict';
    var knapsackControllersModule = angular.module("knapsack.controllers",[]);
    knapsackControllersModule.controller("knapsackController", function(){
        this.knapsackCapacity = 11;
    });

})(window.angular);