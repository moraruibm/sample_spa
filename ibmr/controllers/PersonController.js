define(['jquery',
		'underscore',
		'ibmr/services/MongoService',
		'ibmr/services/LocalStorageService', 
		'text!ibmr/templates/person.tp'], 

	function($, _, MongoService, LocalStorageService, personTp) {

			 var PersonController = {
			 
				init:function(){
					$('.upload').live('click', function(){
						var person = $(this).data('person');
						PersonController.uploadPerson(person);
						PersonController.logPerson(person);
					});

					var history = LocalStorageService.loadHistory();
					for (var i = 0; i < history.length; i++) {		
						var person = history[i];				
						$('#sidebar').append(_.template(personTp, {"person" : person}));
						$('#' + person.cnum).data("person", person);
						$('#' + person.cnum).addClass("uploaded");
					};
				}, 

				uploadPerson:function(person){
					var promise = MongoService.saveIbmPerson(person);
					promise.done(function(){
						$('#' + person.cnum).addClass("uploaded");
					});
				},

				logPerson:function(person){
					LocalStorageService.saveLocal(person);
				}
				
			};

			return PersonController;
	});