define(['jquery',
		'config',
		'ibmr/controllers/FormController',
		'ibmr/controllers/PersonController'], 

	function($, config, FormController, PersonController) {

			 var IBMR = {
			 
				start:function(){

					$("title").append(config.title);

					FormController.init();
					PersonController.init();
				}
			};

			return IBMR;
	});