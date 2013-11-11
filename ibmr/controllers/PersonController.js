define(['jquery',
		'ibmr/services/MongoService'], 

	function($, MongoService) {

			 var PersonController = {
			 
				init:function(){
					$('.upload').live('click', function(){
						var person = $(this).data('person');
						PersonController.uploadPerson(person);
					});
				}, 

				uploadPerson:function(person){
					var promise = MongoService.saveIbmPerson(person);
					promise.done(function(){
						$('#' + person.cnum).addClass("uploaded");
					});
				}
				
			};

			return PersonController;
	});