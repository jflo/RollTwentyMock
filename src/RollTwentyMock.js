var RollTwentyMock = RollTwentyMock || function () {
        const r20utility = require('./r20utility');
        const r20object = require('./r20object');
        const r20event = require('./r20event');
        const r20chat = require('./r20chat');

        const campaign = r20object.createObj();

        // var campaign = new GameObject();
        const state = {};

        function initCampaign() {
            campaign._type = "campaign";
            campaign.turnorder = '';
            campaign.initiativepage = false;
            campaign.playerpageid = false;
            campaign.playerspecificpages = false;
        }

        //
        function Campaign() {
            return campaign;
        }
        //
        initCampaign();

        return {
            state: state,
            Campaign: Campaign,

            sendChat: r20chat.sendChat,

            triggerEvents: r20event.triggerEvents,
            on: r20event.on,

            createObj: r20object.createObj,
            getObj: r20object.getObj,
            findObjs: r20object.findObjs,
            filterObjs: r20object.filterObjs,
            getAllObjs: r20object.getAllObjs,
            getAttrByName: r20object.getAttrByName,
            toFront: r20object.toFront,
            toBack: r20object.toBack,

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

// This is dirty. I'm sorry. Not really.
Object.keys(RollTwentyMock).forEach(function(key) {
    GLOBAL[key] = RollTwentyMock[key];
});
