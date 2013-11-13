define(
    ['ibmr/services/Ws4dService'],
    function(Ws4dService) {
        var register = function() {
            asyncTest('Should return the ibmr...', 1, function() {

            	var promise = Ws4dService.getIbmPerson('366120616');//SEAN:366120616;KERRY:022943866
                promise.done(function(response){
                	var person = response.response.resultset[0].row;
                	equal(person.FIRST_NAME, "SEAN", "Cnum must corespond to IBMR");
                	start();
                });           
            });
        };
        return {register: register}
    }
);