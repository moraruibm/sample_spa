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
    ['QUnit', 'tests/services/WS4DServiceTest'],
    function(QUnit, WS4DServiceTest) {
        
        WS4DServiceTest.register();
        
        QUnit.load();
        QUnit.start();
    }
);