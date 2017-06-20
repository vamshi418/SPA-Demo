/**
* 
*/

app.controller('PersonController',function(PersonService,$scope){
/*
* This is a statement which will get executed automatically when the PersonController get initialized
*/
	
function getAllPersons(){	
	$scope.persons=PersonService.getAllPersons().then(function(response){
      console.log(response.status)
    $scope.persons=response.data;
},function(response){
  console.log(response.status) 
})
}

/*
* This is a function, which will be called only when user clicks some button
*/

$scope.save=function(){
  PersonService.savePerson($scope.person).then(function(response){
    console.log(response.status)
    console.log(response.data)
    $location.path('/getallpersons')
},function(response){
  console.log(response.status)
})
}


$scope.updatePerson=function(person){
	PersonService.updatePerson($scope.person).then(function(response){
		console.log(response.status)
		console.log(response.data)
	$location.path('/getallpersons')
	},function(response){
	console.log(response.status)
	})
	}


$scope.deletePerson=function(id){
	PersonService.deletePerson(id).then(function(response){
		console.log(response.status)
		getAllPersons();
	$location.path('/getallpersons')
	},function(response){
	console.log(response.status)
	})
	}
})
