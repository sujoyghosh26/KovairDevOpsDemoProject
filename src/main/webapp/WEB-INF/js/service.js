var devOpsService = angular.module('DevOpsDemoApp.services', []);


devOpsService.factory('devOpsService', function ($http) {
	
	var devOpsDemoAPI = {}
	
	devOpsDemoAPI.login = function ($user) {
        debugger;
        return $http({
            method: "POST",
            url: "login",
            data: angular.toJson($user),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
    }
	
	devOpsDemoAPI.getAllEmployee = function () {

		
		$employee = [
           	    {
           	        "First Name": "Cox",
           	        "Last Name": "Carney",
           	        "Company": "Kovair",
           	        "Date of Joining": "01/06/2010",
           	        "Department": "ALM Developement"
           	    },
           	    {
           	        "First Name": "Lorraine",
           	        "Last Name": "Wise",
           	        "Company": "Kovair",
           	        "Date of Joining": "01/07/2010",
           	        "Department": "Cloud Infra Exec"
           	    },
           	    {
           	        "First Name": "Nancy",
           	        "Last Name": "Waters",
           	        "Company": "Kovair",
           	        "Date of Joining": "01/08/2010",
           	        "Department": "Omnibus Developement"
           	    },
           	    {
           	        "First Name": "Somesh",
           	        "Last Name": "Roy",
           	        "Company": "Kovair",
           	        "Date of Joining": "01/08/2005",
           	        "Department": "Omnibus Developement"
           	    },
           	    {
           	        "First Name": "Alexa",
           	        "Last Name": "Galcanvos",
           	        "Company": "Kovair",
           	        "Date of Joining": "15/09/2006",
           	        "Department": "Omnibus Developement"
           	    },
           	    {
           	        "First Name": "Jeromy",
           	        "Last Name": "Jack",
           	        "Company": "Kovair",
           	        "Date of Joining": "20/09/2010",
           	        "Department": "ALM Developement"
           	    },
           	    {
           	        "First Name": "Scott",
           	        "Last Name": "Allen",
           	        "Company": "Kovair",
           	        "Date of Joining": "21/10/2009",
           	        "Department": "ALM Developement"
           	    },
           	    {
           	        "First Name": "Soumonil",
           	        "Last Name": "Roy Chowdhury",
           	        "Company": "Kovair",
           	        "Date of Joining": "01/08/2005",
           	        "Department": "Software Engineer"
           	    },
           	    {
           	        "First Name": "Joydeep",
           	        "Last Name": "Dutta",
           	        "Company": "Kovair",
           	        "Date of Joining": "01/08/2006",
           	        "Department": "Software Engineer"
           	    }
       	];

		//$employee = []; 
		$employee = [];
		return $employee
	}
	
	return devOpsDemoAPI;
	
})
