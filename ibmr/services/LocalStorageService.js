define([], 

	function() {

			 var LocalStorageService = {
			 
				saveIbmPerson:function(person){
					localStorage.set(person.cnum, JSON.stringify(person));					
				}, 

				loadHistory:function(){
					
				}
			};

			return LocalStorageService;
	});