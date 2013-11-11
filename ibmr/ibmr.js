define(['jquery',
		'ibmr/controllers/FormController',
		'ibmr/controllers/PersonController'], 

	function($, FormController, PersonController) {

			 var IBMR = {
			 
				start:function(){
					FormController.init();
					PersonController.init();
				}
			};

			return IBMR;
	});