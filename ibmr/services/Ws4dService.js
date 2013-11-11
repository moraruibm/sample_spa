define(['jquery'], 

	function($) {

			 var Ws4dService = {
			 
				getIbmPerson:function(cnum){
					
					return $.ajax({
						type: "GET",
						url: "https://istart-rest-dev1.lexington.ibm.com/restws/ebi/iemetrics/5283/",
						contentType: "application/json",
						dataType: 'jsonp',
						data : {"format" : "j", "cnum" : cnum}
					});
				}
			};

			return Ws4dService;
	});