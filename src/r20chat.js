var r20chat = r20chat || function () {
        var r20event = require('./r20event');

        function sendChat(speakingAs, msgBody, cb, options) {
            // this only works in es6+
            // console.log(`Chat sent: <${speakingAs}> ${msgBody}`);

            r20event.triggerEvents('chat:message', msgBody);
        }

        return {
            sendChat: sendChat
        };
    }();

Object.keys(r20chat).forEach(function(key){
    exports[key] = r20chat[key];
});
