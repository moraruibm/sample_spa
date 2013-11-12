define(['jquery'], 

	function($) {

			 var MongoService = {
			 
				saveIbmPerson:function(person){
					

					return $.ajax( { url: "https://api.mongolab.com/api/1/databases/ibmr/collections/persons?apiKey=DNoaap2Y9z5bHhAGKv2w5ulrtV-L4h6G",
						type: "POST",
        				data: JSON.stringify( person ),          					
          				contentType: "application/json" } );
				}
			};

			return MongoService;
	});