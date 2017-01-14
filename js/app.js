/**
 * Created by sony on 11/03/2016.
 */
var gng = angular.module('gng', ['ngRoute']);

gng.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'Pages/indexPage.html',
            controller: 'indexController'
        }).when('/section',{
            templateUrl: 'Pages/Section.html',
            controller: 'sectionController'
        });
});