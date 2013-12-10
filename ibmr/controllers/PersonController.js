define(['jquery',
		'underscore',
		'ibmr/services/Ws4dService',
		'ibmr/services/MongoService',
		'ibmr/services/LocalStorageService', 
		'text!ibmr/templates/person.tp'], 

	function($, _, Ws4dService, MongoService, LocalStorageService, personTp) {

			 var PersonController = {
			 
				init:function(){

					$("#loadCnum").click(function(){
						var cnum = $("#cnum").val();
						PersonController.getIbmPerson(cnum);
					});
					
					$("#clearStorage").click(function(){
						localStorage.clear();
						$('#sidebar').html("<h2>Query results:</h2>");
					});

					$('.upload').live('click', function(){
						var person = $(this).data('person');
						PersonController.uploadPerson(person);						
					});

					var history = LocalStorageService.loadHistory();
					for (var i = 0; i < history.length; i++) {		
						var person = history[i];				
						$('#sidebar').append(_.template(personTp, {"person" : person}));
						$('#' + person.cnum).data("person", person);
						$('#' + person.cnum).addClass("uploaded");
					};
				}, 

				getIbmPerson:function(cnum){
					var promise = Ws4dService.getIbmPerson(cnum);

					promise					
					.then(function(response){
						var row = response.response.resultset[0].row;
						row.cnum = cnum;
						$('#sidebar').append(_.template(personTp, {"person" : row}));
						$('#' + cnum).data("person", row);
						return cnum;
					}).then(function(cnum){
						console.log("am incarcat IBM_PERSON:" + cnum);
					})					
					.fail(function(error){
						alert( JSON.stringify(error) );
					});		
				},

				uploadPerson:function(person){
					var promise = MongoService.saveIbmPerson(person);
					promise.done(function(){
						$('#' + person.cnum).addClass("uploaded");
					})
					.done(PersonController.logPerson(person));
				},

				logPerson:function(person){
					LocalStorageService.saveLocal(person);
				}
				
			};

			return PersonController;
	});