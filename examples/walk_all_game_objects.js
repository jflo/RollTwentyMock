on('ready', function () {
    var gameobjects = getAllObjs();

    gameobjects.forEach(function (o) {
        var i = o.get('_id');
        var t = o.get('_type');
        var n = o.get('name');
        log(`${t}:${i}:${n}`);
    });
});
