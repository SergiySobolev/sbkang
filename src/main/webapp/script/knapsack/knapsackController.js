(function (angular) {
    'use strict';
    var knapsackControllersModule = angular.module("knapsack.controllers",[]);
    knapsackControllersModule.controller("knapsackController", function(){
        this.weightsPricesArray = [{x:1,y:1},{x:2,y:2}];
        this.knapsackCapacity = 10;
        this.solution = function(){
            console.log("solution");
        }
    });

})(window.angular);