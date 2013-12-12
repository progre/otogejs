/// <reference path="../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../typings/angularjs/angular-route.d.ts"/>
/// <reference path="../../typings/easeljs/easeljs.d.ts"/>

var app = angular.module('app', ['ngRoute', 'ngAnimate']);
app.config(['$routeProvider',
    ($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider
            .when('/', {
                templateUrl: 'html/index.html', controller: 'IndexController'
            }).otherwise({
                templateUrl: 'html/404.html'
            });
    }
]);
app.controller('IndexController',
    [() => {
        var canvas = <HTMLCanvasElement>angular.element('#main-canvas')[0];
        var stage = new createjs.Stage(canvas);
        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.addEventListener('tick', () => {
            console.log('hoge');
            stage.update();
        });
    }]);

angular.bootstrap(<any>document, ['app']);
