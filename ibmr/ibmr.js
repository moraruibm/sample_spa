define(['jquery',
		'config',
		'ibmr/controllers/PersonController'], 

	function($, config, PersonController) {

			 var IBMR = {
			 
				start:function(){

					$("title").append(config.title);
					
					PersonController.init();
				}
			};

			return IBMR;
	});