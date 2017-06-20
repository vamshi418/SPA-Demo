/**
* PersonService
*/
app.factory('PersonService',function($http){
var personService={};

personService.getAllPersons=function(){
return $http.get("http://localhost:8081/backendcruddemo/getallpersons")
}

personService.savePerson=function(person){
return $http.post("http://localhost:8081/backendcruddemo/saveperson",person)
}

personService.getPersonById=function(id){
	return $http.get("http://localhost:8081/backendcruddemo/getpersonbyid",+id)
	}

personService.updatePerson=function(person){
	return $http.put("http://localhost:8081/backendcruddemo/updateperson",person)
	}

personService.deletePerson=function(id){
	return $http['delete']("http://localhost:8081/backendcruddemo/deleteperson",+id)
	}

return personService;
})