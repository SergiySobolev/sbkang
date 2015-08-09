(function (angular) {
    'use strict';
    var slideshowControllersModule = angular.module("slideshow.controllers",[]);
    slideshowControllersModule.controller("slideshowController", function(){
        this.images = [{
            src: '/images/img1.png',
            title: 'Pic 1'
        }, {
            src: '/images/img2.jpg',
            title: 'Pic 2'
        }, {
            src: '/images/img3.jpg',
            title: 'Pic 3'
        }, {
            src: '/images/img4.png',
            title: 'Pic 4'
        }, {
            src: '/images/img5.png',
            title: 'Pic 5'
        }];
    });

})(window.angular);