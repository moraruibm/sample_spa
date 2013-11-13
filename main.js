requirejs.config({
	baseUrl: '',
	paths: {
		text: 'lib/require/plugins/text',
		jquery: 'lib/jquery-1.8.3',
		underscore: 'lib/underscore',		
		Sammy: 'lib/Sammy'
	},
	shim: {
		'Sammy': {
            exports: 'Sammy'
    	}
	},
	callback : function(){
		
	}

});

requirejs(['ibmr/ibmr', 'Sammy'], function(IBMR, Sammy) {

		IBMR.start();

		var app = Sammy('#wrap', function() {   
 			this.get('#/dashboard', function() {   
 				$('#main1').show(); 			
    			$('#main2').hide();
  			});
  			this.get('#/load-upload', function() {
  				$('#main1').hide();
    			$('#main2').show();
  			});
		});

		app.run('#/dashboard');
});
