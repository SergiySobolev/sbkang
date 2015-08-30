(function (angular) {
    'use strict';
    var knapsackServiceModule =  angular.module('knapsack.service', []);
    knapsackServiceModule.factory('knapsackService', function(){


        var max = function(var1, var2){
            if(var1 > var2) {
                return var1;
            } else {
                return var2;
            }
        };

        var buildMaxKnapSack = function(s, n, items, locCost, locMaxKnapSack){
            if(s<1){
                return locMaxKnapSack;
            }
            if(locCost[s][n] == 0){
                return locMaxKnapSack;
            }
            if(locCost[s][n] == locCost[s-1][n]){
                return buildMaxKnapSack(s-1, n, items, locCost, locMaxKnapSack);
            } else {
                locMaxKnapSack.push(items[s-1]);
                return buildMaxKnapSack(s-1, n-items[s-1].weight, items,  locCost, locMaxKnapSack)
            }
        };

        var calcMaxCost = function(items, maxWeight){
            var k = items.length;
            var cost = [];

            for( var m=0; m<=k; m++) {
                var row = [];
                for (var n = 0; n <= maxWeight; n++) {
                    row.push(0);
                }
                cost.push(row);
            }

            for( var j=0; j<k; j++ ){
                for( var i=0; i<=maxWeight; i++ ){
                    var curItemWeight = items[j].weight;
                    var curItemPrice = items[j].price;
                    var costWithoutCurrentItem = cost[j][i];
                    var placeForItem = i-curItemWeight;
                    var havePlaceForItem = placeForItem >= 0;
                    if( havePlaceForItem ) {
                        var costWithCurrentItem = cost[j][placeForItem] + curItemPrice;
                        var isCostWithCurrentItemHigher = costWithCurrentItem > costWithoutCurrentItem;
                        if(isCostWithCurrentItemHigher) {
                            cost[j + 1][i] = costWithCurrentItem;
                        } else {
                            cost[j + 1][i] = costWithoutCurrentItem;
                        }
                    } else {
                        cost[j + 1][i] = costWithoutCurrentItem;
                    }
                    if(havePlaceForItem){

                    } else {

                    }
                }
            }
            var maxKnapSack = [];
            return buildMaxKnapSack(k, maxWeight, items, cost, maxKnapSack);
        };
        return {
            calcMaxCost:calcMaxCost
        };
    });

})(window.angular);