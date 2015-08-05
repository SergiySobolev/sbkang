(function (angular) {
    'use strict';
    var knapsackControllersModule = angular.module("knapsack.controllers",[]);
    knapsackControllersModule.controller("knapsackController", function(){
        this.knapsackCapacity = 11;
        this.weight = 15;
        this.x = 41;
        this.y = 24;
        this.setX = function(val){
            this.x = val+this.x;
            console.log(this.x);
            return this.x;
        };
        this.setY = function(val){
            this.y = val+this.y;
            console.log(this.y);
            return this.y;
        }
    });

})(window.angular);