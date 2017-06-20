/**
* Angular JS Module
*/
var app=angular.module("app",['ngRoute'])
app.config(function($routeProvider){
/*
* http://localhost:8081/SPADemo/index.html
* http://localhost:8081/SPADemo/index.html#/aboutus
* http://localhost:8081/SPADemo/index.html#/blog
*/
	
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

.otherwise({
templateUrl:'views/home.html',
controller:'HomeController'
})
})
