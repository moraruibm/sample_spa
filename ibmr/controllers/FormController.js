define(['jquery', 
		'underscore',
		'ibmr/services/Ws4dService',
		'text!ibmr/templates/person.tp'], 

	function($, _, Ws4dService, personTp) {

			 var FormController = {
			 
				init:function(){
					$("#loadCnum").click(function(){
						var cnum = $("#cnum").val();
						FormController.getIbmPerson(cnum);
					});
					$("#clearStorage").click(function(){
						localStorage.clear();
					});
				}, 

				getIbmPerson:function(cnum){
					var promise = Ws4dService.getIbmPerson(cnum);

					promise					
					.done(function(response){
						var row = response.response.resultset[0].row;
						row.cnum = cnum;
						$('#sidebar').append(_.template(personTp, {"person" : row}));
						$('#' + cnum).data("person", row);

					})					
					.fail(function(error){
						alert( JSON.stringify(error) );
					});		
				}
			};

			return FormController;
	});