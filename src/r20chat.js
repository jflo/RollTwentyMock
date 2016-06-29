var r20chat = r20chat || function () {
        var r20event = require('./r20event');

        function sendChat(speakingAs, msg, cb, options) {
            console.log('CHAT: <' + speakingAs + '> ' + msg);
            r20event.triggerEvents('chat:message', msg);
        }

        return {
            sendChat: sendChat
        };
    }();

Object.keys(r20chat).forEach(function(key){
    exports[key] = r20chat[key];
});
