(function (angular) {
    'use strict';
    var knapSackModule =  angular.module('knapSackModule', []);
    knapSackModule.factory('knapSackService', function(){
        var cost = [];
        var maxKnapSack = [];

        var max = function(var1, var2){
            if(var1 > var2) {
                return var1;
            } else {
                return var2;
            }
        };

        var buildMaxKnapSack = function(s, n, weights, locCost, locMaxKnapSack){
            if(s<1){
                return locMaxKnapSack;
            }
            if(locCost[s][n] == 0){
                return locMaxKnapSack;
            }
            if(locCost[s][n] == locCost[s-1][n]){
                return buildMaxKnapSack(s-1, n, weights, locCost, locMaxKnapSack);
            } else {
                locMaxKnapSack.push(s-1);
                return buildMaxKnapSack(s-1, n-weights[s-1], weights, locCost, locMaxKnapSack)
            }
        };

        var calcMaxCost = function(weights, prices, maxWeight){
            var k = weights.length;

            for( var m=0; m<=k; m++) {
                var row = [];
                for (var n = 0; n <= maxWeight; n++) {
                    row.push(0);
                }
                cost.push(row);
            }

            for( var j=0; j<k; j++ ){
                for( var i=0; i<=maxWeight; i++ ){
                    if( i>=weights[j] && (cost[j][i-weights[j]] + prices[j] > cost[j][i])) {
                        cost[j+1][i] = cost[j][i-weights[j]] + prices[j];
                    } else {
                        cost[j+1][i] = cost[j][i];
                    }
                }
            }
            return buildMaxKnapSack(k, maxWeight, weights, cost, maxKnapSack);
        };
        return {
            calcMaxCost:calcMaxCost
        };
    });

})(window.angular);