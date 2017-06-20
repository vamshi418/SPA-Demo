/**
 * 
 */
app.controller('EditController',function($scope,PersonService,$routeparams){
var id=$routeParams.id;	


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
	 },function(response){
		console.log(response.status) 
	 })
 }
})