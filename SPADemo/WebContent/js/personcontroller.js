/**
* 
*/
app.controller('PersonController',function(PersonService,$scope,$location){
/*
* This is a statement which will get executed automatically when the PersonController get initialized
* from controller to html
*/
$scope.persons=PersonService.getAllPersons().then(function(response){
console.log(response.status)
$scope.persons=response.data;
},function(response){
console.log(response.status)
})
/*
* This is a function, which will be called only when user clicks some button
* Data - from html to controller
*/
$scope.save=function(){
	
PersonService.savePerson($scope.person).then(function(response){
	
/*console.log(response.status)*/
console.log(response.data)
$location.path('/getallpersons')
},function(response){
console.log(response.status)
})
}

$scope.deletePerson=function(id){
PersonService.deletePerson(id).then(function(response){
$location.path('/getallpersons')
},function(response){
console.log(response.status)
})
}



})

