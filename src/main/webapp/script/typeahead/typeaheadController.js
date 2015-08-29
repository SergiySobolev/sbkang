(function (angular) {
    'use strict';
    var typeaheadControllerModule = angular.module("typeahead.controller", ["typeahead.factories",
                                                                           "typeahead.directives"]);

    typeaheadControllerModule.controller('typeAheadController', typeaheadController);

    function typeaheadController($scope, dataFactory){
        dataFactory.get('/json/states.json').then(function(data){
            $scope.items = data;
        });
        $scope.name = '';
        $scope.onItemSelected = function() {
            console.log('selected=' + $scope.name);
        };
    }

})(window.angular);