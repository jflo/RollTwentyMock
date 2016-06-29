var RollTwentyMock = RollTwentyMock || function () {
        const r20utility = require('./r20utility');
        const r20object = require('./r20object');
        const r20event = require('./r20event');
        const r20chat = require('./r20chat');

        // const campaign =

        // var campaign = new GameObject();
        var state = {};
        var eventMap = {};
        
        // function initCampaign() {
        //     campaign.turnorder = '';
        //     campaign.initiativepage = false;
        //     campaign.playerpageid = false;
        //     campaign.playerspecificpages = false;
        // }
        //
        // function Campaign() {
        //     return campaign;
        // }
        //
        // initCampaign();

        return {
            // r20chat
            sendChat: r20chat.sendChat,
            // r20event
            triggerEvents: r20event.triggerEvents,
            on: r20event.on,
            // r20object
            // r20utility
            log: r20utility.log,
            randomInteger: r20utility.randomInteger,
            playerIsGM: r20utility.playerIsGM,
            spawnFx: r20utility.spawnFx,
            spawnFxBetweenPoints: r20utility.spawnFxBetweenPoints,
            spawnFxWithDefinition: r20utility.spawnFxWithDefinition,
            playJukeboxPlaylist: r20utility.playJukeboxPlaylist,
            stopJukeboxPlaylist: r20utility.stopJukeboxPlaylist,
            sendPing: r20utility.sendPing
        };
    }();

// This is dirty. I'm sorry.
Object.keys(RollTwentyMock).forEach(function(key) {
    GLOBAL[key] = RollTwentyMock[key];
});
