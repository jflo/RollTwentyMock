// var r20utility = r20utility || function () {
//         function log(msg) {
//             console.log('LOG: ' + msg);
//         }
//
//         function randomInteger(max) {
//             // This is inferior to Roll20's implementation but
//             // no one should be using this for repeated calls.
//             return Math.floor(Math.random() * max);
//         }
//
//         function playerIsGM(playerID) {
//             // todo: Good enough?
//             return true;
//         }
//
//         function spawnFx(x, y, type, pageID) {
//             // DONE - no return
//         }
//
//         function spawnFxBetweenPoints(point1, point2, type, pageID) {
//             // DONE - no return
//         }
//
//         function spawnFxWithDefinition(x, y, definitionJSON, pageID) {
//             // DONE - no return
//         }
//
//         function playJukeboxPlaylist(playListID) {
//             // DONE - no return
//         }
//
//         function stopJukeboxPlaylist() {
//             // DONE - no return
//         }
//
//         function sendPing(left, top, pageID, playerID, moveAll) {
//             // DONE - no return
//         }
//
//         return {
//             log: log,
//             randomInteger: randomInteger,
//             playerIsGM: playerIsGM,
//             spawnFx: spawnFx,
//             spawnFxBetweenPoints: spawnFxBetweenPoints,
//             spawnFxWithDefinition: spawnFxWithDefinition,
//             playJukeboxPlaylist: playJukeboxPlaylist,
//             stopJukeboxPlaylist: stopJukeboxPlaylist,
//             sendPing: sendPing
//         };
//     }();
//
// Object.keys(r20utility).forEach(function(key){
//     exports[key] = r20utility[key];
// });
