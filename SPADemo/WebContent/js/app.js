/**
* Angular JS Module
*/
var app=angular.module("app",['ngRoute'])
app.config(function($routeProvider){
$routeProvider
.when('/home',{
templateUrl:'views/home.html',
controller:'HomeController'
})
.when('/aboutus',{
templateUrl:'views/aboutus.html',
controller:'AboutUsController'
})
.when('/blog',{
templateUrl:'views/blog.html',
controller:'BlogController'
})
.when('/getallpersons',{
templateUrl:'views/persons.html',
controller:'PersonController'
})
.when('/saveperson',{
templateUrl:'views/personform.html',
controller:'PersonController'
})
.when('/getpersonbyid/:id',{
templateUrl:'views/editform.html',
controller:'EditController'
})
.otherwise({
templateUrl:'views/home.html',
controller:'HomeController'
})
})
