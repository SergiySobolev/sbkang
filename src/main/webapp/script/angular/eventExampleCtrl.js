(function (angular) {
    'use strict';

    var eventExample = angular.module('eventExample', []);

    eventExample.controller('EventController', ['$scope', function($scope) {
            $scope.count = 0;
            $scope.$on('MyEvent', function() {
                $scope.count++;
            });
        }]);

})(window.angular);