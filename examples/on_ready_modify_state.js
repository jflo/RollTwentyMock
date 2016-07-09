require('../src/RollTwentyMock');

on('ready',function() {
    "use strict";

    // Check if the namespaced property exists, creating it if it doesn't
    if( ! state.MyModuleNS ) {
        state.MyModuleNS = {
            version: 1.0,
            config: {
                color1: '#ff0000',
                color2: '#0000ff'
            },
            count: 0
        };
    }

    // Using the state properties to configure a message to the chat.
    sendChat(
        'Test Module',
        '<span style="color: '+state.MyModuleNS.config.color1+';">'+
            'State test'+
        '</span> '+
        '<span style="color: '+state.MyModuleNS.config.color2+';">'+
            'Script v'+state.MyModuleNS.version+' started '+(++state.MyModuleNS.count)+' times!'+
        '</span>'
    );
});
