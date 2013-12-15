/// <reference path="../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../typings/angularjs/angular-route.d.ts"/>
/// <reference path="../../typings/easeljs/easeljs.d.ts"/>
/// <reference path="../../typings/linq.d.ts"/>
import GameMain = require('./app/gamemain');
import GameMainView = require('./ui/gamemainview');

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

        var gameMain = new GameMain();
        var gameMainView = new GameMainView();
        gameMainView.init(stage, canvas.width, canvas.height, gameMain);

        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.addEventListener('tick', () => {
            gameMainView.update();
            stage.update();
        });
    }]);

angular.bootstrap(<any>document, ['app']);
