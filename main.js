requirejs.config({
	baseUrl: '',
	paths: {
		text: 'lib/require/plugins/text',
		jquery: 'lib/jquery-1.8.3',
		underscore: 'lib/underscore'		
	},
	callback : function(){
		
	}

});

requirejs(['ibmr/ibmr'], function(IBMR) {

		IBMR.start();
});
