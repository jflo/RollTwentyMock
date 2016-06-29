var r20 = require('../src/RollTwentyMock');

sendChat('Fred', 'Hello');


on("change:graphic", function (obj) {
    obj.set({
        left: obj.get("left") + distanceToPixels(5)
    });
});

on("chat:message", function (msg) {
    console.log("Chat Message Event.");
});

sendChat('Fred', 'Hello2');
