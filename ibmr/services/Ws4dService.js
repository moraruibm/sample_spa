define(['jquery',
		'config'], 

	function($, config) {

			 var Ws4dService = {
			 
				getIbmPerson:function(cnum){
					
					return $.ajax({
						type: "GET",
						url: config.ws4d,
						contentType: "application/json",
						dataType: 'jsonp',
						data : {"format" : "j", "cnum" : cnum}
					});
				}
			};

			return Ws4dService;
	});