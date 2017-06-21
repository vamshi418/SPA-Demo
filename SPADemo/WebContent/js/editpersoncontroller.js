/**
* To edit person details
* http://localhost:8081/SPADemo/index.html#/getpersonbyid/1
*/
app.controller('EditController',function($scope,PersonService,$routeParams,$location){
var id=$routeParams.id;
/*
* This is a statement which will get person by id
*/

$scope.person=PersonService.getPersonById(id).then(function(response){
$scope.person=response.data
console.log(response.data)
console.log(response.status)
},function(response){
console.log(response.status)
})


$scope.update=function(){
PersonService.updatePerson($scope.person).then(function(response){
console.log(response.status)
$location.path('/getallpersons')
},function(response){
console.log(response.status)
})
}

})