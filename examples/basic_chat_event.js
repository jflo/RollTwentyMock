sendChat('Fred', 'Hello');

on("chat:message", function (msg) {
    console.log("Chat Message Event.");
});

sendChat('Fred', 'Hello2', null, {noarchive:true});
