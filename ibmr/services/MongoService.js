define(['jquery',
		'config'], 

	function($, config) {

			 var MongoService = {
			 
				saveIbmPerson:function(person){
					
					return $.ajax( { url: config.mongolab,
						type: "POST",
        				data: JSON.stringify( person ),          					
          				contentType: "application/json" } );
				}
			};

			return MongoService;
	});