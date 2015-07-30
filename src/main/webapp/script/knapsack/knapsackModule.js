(function (angular) {
    'use strict';
    var knapsackModule = angular.module("knapsackModule",
        ["knapsack.controllers", "knapsack.directives"])
        .config(function ($sceDelegateProvider, $provide) {
           // $sceDelegateProvider.resourceUrlWhitelist([
                // Allow same origin resource loads.
            //    'self',
                // Allow loading from our assets domain.  Notice the difference between * and **.
            //    'localhost:9999/templates/**'
         //   ]);

            //$provide.decorator('$templateRequest', function ($delegate) {
            //    var mySilentProvider = function (tpl, ignoreRequestError) {
            //        return $delegate(tpl, true);
            //    }
            //    return mySilentProvider;
            //});
        });

})(window.angular);