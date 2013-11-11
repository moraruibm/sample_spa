require.config({
    paths: {
        'jquery': 'lib/jquery-1.8.3',
        'QUnit': 'lib/qunit'
    },
    shim: {
       'QUnit': {
           exports: 'QUnit',
           init: function() {
               QUnit.config.autoload = false;
               QUnit.config.autostart = false;
           }
       } 
    }
});

require(
    ['QUnit', 'tests/testService'],
    function(QUnit, testService) {
        
        testService.register();
        
        QUnit.load();
        QUnit.start();
    }
);