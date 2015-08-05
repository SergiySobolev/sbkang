(function (angular) {
    'use strict';
    var knapsackControllersModule = angular.module("knapsack.controllers",[]);
    knapsackControllersModule.controller("knapsackController", function(){
        this.knapsackCapacity = 11;
        this.weight = 15;
        this.x = 41;
        this.y = 24;
    });

})(window.angular);