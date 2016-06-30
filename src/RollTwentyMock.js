/**
 * Approximation of Roll20's script API for purposes of testing
 * https://github.com/unexre/RollTwentyMock
 * @version 0.0.1
 * @author RollTwentyMock team, see AUTHORS
 * @license BSD-2-Clause, see LICENSE
 */

/*
    This file specifically avoids 'use strict' at its top scope
    to avoid breaking anything when concatenated with user scripts
    that are not written with strict compliance.
*/

const RollTwentyMock = RollTwentyMock || function() {
        'use strict';

        // consts
        const eventList = [];
        const gameObjectDB = [];
        const state = {};

        // valid types for createObj() according to
        // https://wiki.roll20.net/API:Objects#Creating_Objects
        const createableObjectTypes = [
            'path',
            'text',
            'graphic',
            'macro',
            'rollabletable',
            'tableitem',
            'character',
            'attribute',
            'ability',
            'handout'
        ];

        const statusMarkers = [
            'red', 'blue', 'green', 'brown', 'purple', 'pink', 'yellow', 'dead', 'skull', 'sleepy', 'half-heart',
            'half-haze', 'interdiction', 'snail', 'lightning-helix', 'spanner', 'chained-heart', 'chemical-bolt',
            'death-zone', 'drink-me', 'edge-crack', 'ninja-mask', 'stopwatch', 'fishing-net', 'overdrive', 'strong',
            'fist', 'padlock', 'three-leaves', 'fluffy-wing', 'pummeled', 'tread', 'arrowed', 'aura', 'back-pain',
            'black-flag', 'bleeding-eye', 'bolt-shield', 'broken-heart', 'cobweb', 'broken-shield', 'flying-flag',
            'radioactive', 'trophy', 'broken-skull', 'frozen-orb', 'rolling-bomb', 'white-tower', 'grab', 'screaming',
            'grenade', 'sentry-gun', 'all-for-one', 'angel-outfit', 'archery-target'
        ];

        const defaultValues = {
            path: {
                _type: 'path',
                _path: '',
                fill: 'transparent',
                stroke: '#000000',
                rotation: 0,
                layer: '',
                stroke_width: 5,
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                scaleX: 1,
                scaleY: 1,
                controlledby: ''
            },
            text: {
                _type: 'text',
                rotation: 0,
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                text: '',
                font_size: 16,
                color: 'rgb(0, 0, 0)',
                font_family: 'unset',
                layer: '',
                controlledby: ''
            },
            graphic: {
                _type: 'graphic',
                _subtype: 'token',
                _cardid: '',
                imgsrc: '',
                bar1_link: '',
                bar2_link: '',
                bar3_link: '',
                represents: '4',
                left: 0,
                top: 0,
                width: 25,
                height: 25,
                rotation: 0,
                layer: '',
                isdrawing: false,
                flipv: false,
                fliph: false,
                name: '',
                gmnotes: '',
                controlledby: '',
                bar1_value: '',
                bar2_value: '',
                bar3_value: '',
                bar1_max: '',
                bar2_max: '',
                bar3_max: '',
                aura1_radius: '',
                aura2_radius: '',
                aura1_color: '#FFFF99',
                aura2_color: '#59E594',
                aura1_square: false,
                aura2_square: false,
                tint_color: 'transparent',
                statusmarkers: '',
                showname: false,
                showplayers_name: false,
                showplayers_bar1: false,
                showplayers_bar2: false,
                showplayers_bar3: false,
                showplayers_aura1: false,
                showplayers_aura2: false,
                playersedit_name: false,
                playersedit_bar1: false,
                playersedit_bar2: false,
                playersedit_bar3: false,
                playersedit_aura1: false,
                playersedit_aura2: false,
                light_radius: '',
                light_dimradius: '',
                light_otherplayers: false,
                light_hassight: false,
                light_angle: '360',
                light_losangle: '360',
                lastmove: '',
                light_multiplier: '1'
            },
            page: {
                _type: 'page',
                _zorder: '',
                name: '',
                showgrid: true,
                showdarkness: false,
                showlighting: false,
                width: 25,
                height: 25,
                snapping_increment: 1,
                grid_opacity: 0.5,
                fog_opacity: 0.35,
                background_color: '#FFFFFF',
                gridcolor: '#C0C0C0',
                grid_type: 'square',
                scale_number: 5,
                scale_units: 'ft',
                gridlabels: false,
                diagonaltype: 'foure',
                archived: false,
                lightupdatedrop: false,
                lightenforcelos: false,
                lightrestrictmove: false,
                lightglobalillum: false
            },
            campaign: {
                _type: 'campaign',
                id: 'root',
                _id: 'root',
                _journalfolder: '',
                _jukeboxfolder: '',
                turnorder: '',
                initiativepage: false,
                playerpageid: false,
                playerspecificpages: false
            },
            player: {
                _type: 'player',
                _d20userid: 123456,   // todo: generate this
                _displayname: 'Placeholder',
                _online: false,
                _macrobar: '',
                speakingas: '',
                color: '#13B9F0',
                showmacrobar: false
            },
            macro: {
                _type: 'macro',
                _playerid: '',
                name: '',
                action: '',
                visibleto: '',
                istokenaction: false
            },
            rollabletable: {
                _type: 'rollabletable',
                name: 'new-table',
                showplayers: true
            },
            tableitem: {
                _type: 'tableitem',
                _rollabletableid: '',
                avatar: '',
                name: '',
                weight: 1
            },
            character: {
                _type: 'character',
                avatar: '',
                name: '',
                bio: '',
                gmnotes: '',
                archived: false,
                inplayerjournals: '',
                controlledby: '',
                _defaulttoken: ''
            },
            attribute: {
                _type: 'attribute',
                _characterid: '',
                name: 'Untitled',
                current: '',
                max: ''
            },
            ability: {
                _type: 'ability',
                _characterid: '',
                name: 'Untitled_Ability',
                description: '',
                action: '',
                istokenaction: false
            },
            handout: {
                _type: 'handout',
                avatar: '',
                name: 'Mysterious Note',
                notes: '',
                gmnotes: '',
                inplayerjournals: '',
                archived: false,
                controlledby: ''
            },
            deck: {
                _type: 'deck',
                _currentDeck: '',
                _currentIndex: -1,
                _currentCardShown: true,
                _discardPile: '',
                _cardSequencer: -1,
                name: '',
                showplayers: true,
                playerscandraw: true,
                avatar: '',
                shown: false,
                players_seenumcards: true,
                players_seefrontofcards: false,
                gm_seenumcards: true,
                gm_seefrontofcards: false,
                infinitecards: false,
                cardsplayed: 'faceup',
                defaultheight: '',
                defaultwidth: '',
                discardpilemode: 'none'
            },
            card: {
                _type: 'card',
                _deckid: '',
                name: '',
                avatar: ''
            },
            hand: {
                _type: 'hand',
                _currentHand: '',
                _parentid: '',
                currentView: 'bydeck'
            },
            jukeboxtrack: {
                _type: 'jukeboxtrack',
                playing: false,
                softstop: false,
                title: '',
                volume: 30,
                loop: false
            }
        };

        // vars
        var _initialized = false;
        var campaign;

        // classes
        function _Roll20Event(trigger, cb) {
            this.trigger = trigger;
            this.cb = cb;
        }
        _Roll20Event.prototype.run = function eventRun(details) {
            if (typeof this.cb === 'function') {
                if (details === undefined) {
                    this.cb();
                } else {
                    this.cb(details);
                }
            }
        };

        function GameObject(otype) {
            if (Object.keys(defaultValues).indexOf(otype) === -1) {
                throw 'Tried to create unknown GameObject type';
            }
            // set uuid first so campaign's can be overwritten by defaults
            this._id = _uuid();
            this.id = this._id;
            var gameobj = this;
            Object.keys(defaultValues[otype]).forEach(function(k) {
                gameobj[k] = defaultValues[otype][k];
            });
            gameObjectDB.push(this);
        }

        GameObject.prototype.get = function get(oattr) {
            return this[oattr];
        };

        GameObject.prototype.set_one_attr = function set_one_attr(oattr, oval) {
            if (oattr.startsWith('_')) {
                // official API silently ignores write attempts
                // to read-only properties
                return;
            }
            this[oattr] = oval;
        };

        GameObject.prototype.set = function set() {
            var a = arguments.length;
            switch(a) {
                case 0:
                    // todo: check if official API throws error
                    return;
                case 1:
                    if (typeof arguments[0] === 'object') {
                        var gameobj = this;
                        Object.keys(arguments[0]).forEach(function(k) {
                            gameobj.set_one_attr(k, arguments[0][k]);
                        });
                    }
                    return;
                case 2:
                    if (typeof arguments[0] === 'string') {
                        if ((typeof arguments[1]) === 'number' || (typeof arguments[1] === 'string')) {
                            this.set_one_attr(arguments[0], arguments[1]);
                        }
                    }
                    return;
            }
        };

        GameObject.prototype.remove = function remove() {
            // this is almost definitely not the way to do this
            var i = gameObjectDB.indexOf(this);
            if (i > -1) {
                gameObjectDB.splice(i, 1);
            }
        };

        function _triggerEvents(trigger, details) {
            // From the API docs:
            //     Events are fired synchronously (meaning each function won't start until the
            //     previous one has finished) in order from first-bound to last-bound, and also
            //     from specific property to general object. So given the following:
            //            on('change:graphic', function1);
            //            on('change:graphic', function2);
            //            on('change:graphic:left', function3);
            //     If the objects left property changed, then the order would be function3, then
            //     function1, then function2.

            while (trigger.indexOf(':') != -1) {
                eventList.forEach(function(e) {
                    if (e.trigger == trigger) {
                        e.run(details);
                    }
                });

                trigger = trigger.replace(/:[\w]+$/, '');
            }
        }

        function on(trigger, cb) {
            var e = new _Roll20Event(trigger, cb);
            eventList.push(e);
        }

        // todo: move this and other private funcs to top
        function _uuid() {
            // from http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            // by broofa
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
        }

        function createObj (otype) {
            if (createableObjectTypes.indexOf(otype) === -1) {
                throw 'ERROR: Tried to create an invalid object type. See the API Documentation for valid types.';
            }
            var o = new GameObject(otype);
            if (typeof arguments[1] === 'object') {
                o.set(arguments[1]);
            }
            return o;
        }

        function getObj() {

        }
        function findObjs() {

        }
        function filterObjs() {

        }
        function getAllObjs() {

        }
        function getAttrByName() {

        }
        function toFront() {

        }
        function toBack() {

        }
        function Campaign() {
            return campaign;
        }

        function _init() {
            if (_initialized) return;

            campaign = new GameObject('campaign');

            var defaultPage = new GameObject('page');
            var pageid = defaultPage.get('_id');

            defaultValues.player._lastpage = pageid;

            [
                'path',
                'text',
                'graphic'

            ].forEach(function(otype) {
                defaultValues[otype]._pageid = pageid;
            });

            _initialized = true;
        }

        function sendChat(speakingAs, msg, cb, options) {
            console.log('CHAT: <' + speakingAs + '> ' + msg);
            r20event.triggerEvents('chat:message', msg);
        }

        function log(msg) {
            console.log('LOG: ' + msg);
        }

        function randomInteger(max) {
            // This is inferior to Roll20's implementation but
            // no one should be using this for repeated calls.
            return Math.floor(Math.random() * max);
        }

        function playerIsGM(playerID) {
            // todo: Good enough?
            return true;
        }

        function spawnFx(x, y, type, pageID) {
            // DONE - no return
        }

        function spawnFxBetweenPoints(point1, point2, type, pageID) {
            // DONE - no return
        }

        function spawnFxWithDefinition(x, y, definitionJSON, pageID) {
            // DONE - no return
        }

        function playJukeboxPlaylist(playListID) {
            // DONE - no return
        }

        function stopJukeboxPlaylist() {
            // DONE - no return
        }

        function sendPing(left, top, pageID, playerID, moveAll) {
            // DONE - no return
        }

        _init();

        return {
            state: state,

            sendChat: sendChat,

            on: on,

            createObj: createObj,
            getObj: getObj,
            findObjs: findObjs,
            filterObjs: filterObjs,
            getAllObjs: getAllObjs,
            getAttrByName: getAttrByName,
            toFront: toFront,
            toBack: toBack,
            Campaign: Campaign,

            log: log,
            randomInteger: randomInteger,
            playerIsGM: playerIsGM,
            spawnFx: spawnFx,
            spawnFxBetweenPoints: spawnFxBetweenPoints,
            spawnFxWithDefinition: spawnFxWithDefinition,
            playJukeboxPlaylist: playJukeboxPlaylist,
            stopJukeboxPlaylist: stopJukeboxPlaylist,
            sendPing: sendPing
        };
    }();

// This is dirty. I'm sorry. (Not really.)
Object.keys(RollTwentyMock).forEach(function(key) {
    global[key] = RollTwentyMock[key];
});
