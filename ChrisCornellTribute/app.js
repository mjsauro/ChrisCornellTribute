var app = angular.module("myApp", ["ngRoute"]);


app.controller("myController", ['$scope', '$http']);

app.config(function ($routeProvider, $locationProvider) {
    //$location.html5Mode(true);
    $routeProvider.when("/main", {
        templateUrl: "templates/main.html"
    }).when("/soundgarden", {
        templateUrl: "templates/soundgarden.html"
    }).when("/audioslave", {
        templateUrl: "templates/audioslave.html"
    }).when("/templeofthedog", {
        templateUrl: "templates/templeofthedog.html"
    }).when("/solowork", {
        templateUrl: "templates/solowork.html"
    })
});
