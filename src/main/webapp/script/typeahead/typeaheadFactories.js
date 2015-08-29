(function (angular) {
    'use strict';
    var typeaheadFactories = angular.module("typeahead.factories", []);
    typeaheadFactories.factory('dataFactory', function($http){
        return {
            get : function(url){
                return $http.get(url).then(function(resp){
                    return resp.data;
                });
            }
        }
    });

})(window.angular);