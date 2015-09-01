(function (angular) {
    'use strict';
    var knapsackControllersModule = angular.module("knapsack.controllers",["knapsack.service"]);
    knapsackControllersModule.controller("knapsackController", function(knapsackService){
        this.items =  [{weight:6,price:5},{weight:4,price:3},{weight:3,price:1},{weight:2,price:3},{weight:5,price:6}];
        this.capacity = 15;
        this.maxKnapSack = [];
        this.cost = [];
        this.solution = function(){
            var maxKnapsackAndCost = knapsackService.calcMaxCost(this.items, this.capacity);
            this.maxKnapSack  = maxKnapsackAndCost[0].maxKnapSack;
            this.cost = maxKnapsackAndCost[0].cost;
        };
        this.solutionConstructed = function(){
            return this.maxKnapSack.length > 0;
        }
    });

})(window.angular);