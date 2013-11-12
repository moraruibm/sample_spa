define([], 

	function() {

			 var LocalStorageService = {
			 
				saveLocal:function(person){
					var last = localStorage.length;
					localStorage.setItem(last, JSON.stringify(person));					
				}, 

				loadHistory:function(){
					var last = localStorage.length;
					var history = [];
					for (var i = 0; i < last; i++) {
						var person = localStorage.getItem(i + "");
						history.push(JSON.parse(person));
					};
					return history;
				}
			};

			return LocalStorageService;
	});