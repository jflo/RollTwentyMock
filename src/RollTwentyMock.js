/**
 * A library that approximates the API made available to scripts for
 * the sole purpose of testing those scripts offline.
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

        // valid types for createObj() are not the full list of types
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

        // not sure these are needed
        // const statusMarkers = [
        //     'red', 'blue', 'green', 'brown', 'purple', 'pink', 'yellow', 'dead', 'skull', 'sleepy', 'half-heart',
        //     'half-haze', 'interdiction', 'snail', 'lightning-helix', 'spanner', 'chained-heart', 'chemical-bolt',
        //     'death-zone', 'drink-me', 'edge-crack', 'ninja-mask', 'stopwatch', 'fishing-net', 'overdrive', 'strong',
        //     'fist', 'padlock', 'three-leaves', 'fluffy-wing', 'pummeled', 'tread', 'arrowed', 'aura', 'back-pain',
        //     'black-flag', 'bleeding-eye', 'bolt-shield', 'broken-heart', 'cobweb', 'broken-shield', 'flying-flag',
        //     'radioactive', 'trophy', 'broken-skull', 'frozen-orb', 'rolling-bomb', 'white-tower', 'grab',
        //     'screaming', 'grenade', 'sentry-gun', 'all-for-one', 'angel-outfit', 'archery-target'
        // ];

        // giant dictionary of all the default fields/values for
        // objects of each type
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
                _d20userid: '123456',   // todo: generate this
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

        // PRIVATE FUNCS
        // todo: different kinds of uuids to match the ones assigned to different object types
        // Can't figure out the format for the non-uuid4 ones. they're like the output of unix crypt() with '-K' salt?
        // but they're not entirely random either -- first 4 (or more) bytes shared between objs of same type
        function _uuid() {
            // from http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            // by broofa
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
        }

        // CLASS APIEVENT
        function APIEvent(trigger, cb) {
            this.trigger = trigger;
            this.cb = cb;
        }

        APIEvent.prototype.run = function eventRun(details) {
            if (typeof this.cb === 'function') {
                if (details === undefined) {
                    this.cb();
                } else {
                    this.cb(details);
                }
            }
        };

        APIEvent.prototype.conditionalRun = function conditionalRun(trigger, details) {
            if (this.trigger === trigger) {
                this.run(details);
            }
        };

        // CLASS GAMEOBJECT
        function GameObject(otype) {
            if (Object.keys(defaultValues).indexOf(otype) === -1)
                throw 'Tried to create unknown GameObject type';
            // set uuid first so campaign's can be overwritten by 'root' in defaults
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
            if (!(this._type in createableObjectTypes))
                throw 'ERROR: Tried to remove an invalid object type. See the API Documentation for valid types.';
            var i = gameObjectDB.indexOf(this);
            if (i > -1) {
                gameObjectDB.splice(i, 1);
            }
        };


        function _triggerEvents(trigger, details) {
            trigger = trigger || 'NONEXISTENT_EVENT';
            details = details || {};

            // From the API docs:
            //     Events are fired synchronously (meaning each function won't start until the
            //     previous one has finished) in order from first-bound to last-bound, and also
            //     from specific property to general object. So given the following:
            //            on('change:graphic', function1);
            //            on('change:graphic', function2);
            //            on('change:graphic:left', function3);
            //     If the objects left property changed, then the order would be function3, then
            //     function1, then function2.

            while (trigger.indexOf(':') !== -1) {
                eventList.forEach(function(entry) {
                    entry.conditionalRun(trigger, details);
                });
                trigger = trigger.replace(/:[\w]+$/, '');
            }
            eventList.forEach(function(entry) {
                entry.conditionalRun(trigger, details);
            });
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

            setTimeout(_triggerEvents, 100, 'ready');
        }

        // PUBLIC FUNCS

        function on(trigger, cb) {
            // DONE?
            cb = cb || function() {};

            var e = new APIEvent(trigger, cb);
            eventList.push(e);
        }

        function createObj (type, attributes) {
            attributes = attributes || {};
            if (createableObjectTypes.indexOf(type) === -1) {
                throw 'ERROR: Tried to create an invalid object type. See the API Documentation for valid types.';
            }
            var o = new GameObject(type);
            if (Object.keys(attributes).length > 0) {
                o.set(arguments);
            }
            return o;
        }

        function getObj(type, id) {
            for (var i = 0, len = gameObjectDB.length; i < len; i++) {
                if ((gameObjectDB[i]._type === type) && (gameObjectDB[i]._id === id)) {
                    return gameObjectDB[i];
                }
            }
        }

        function findObjs(attrs, options) {
            options = options || {};

            // todo: handle options.caseInsensitive = true

            var keys = Object.keys(attrs);
            var l = keys.length;

            return gameObjectDB.filter(function(o) {
                for (var i = 0; i < l; i++) {
                    var k = keys[i];
                    if (!(k in o)) return false;
                    if (o[k] !== attrs[k]) return false;
                }
                return true;
            });
        }

        function filterObjs(callback) {
            // DONE?
            callback = callback || function() {return true;};

            return gameObjectDB.filter(callback);
        }

        function getAllObjs() {
            // DONE?
            return gameObjectDB;
        }

        function getAttrByName(character_id, attribute_name, value_type) {
            value_type = value_type || 'current';



        }

        function toFront(obj) {
            // DONE?
            if (!('_id' in obj))
                throw 'Error: toFront() must be given an object either from an event or getObj() or similar.';
            if (!('_pageid' in obj))
                throw 'Error: Could not find page for object.';

            var pg = getObj('page', obj._pageid);

            if (!('_id' in pg)) throw 'Error: Could not find page for object.';

            var zlist = pg._zorder.split(',');
            var pos = zlist.indexOf(obj._id);
            if (pos > -1) {
                zlist.splice(pos, 1);
            } else {
                // todo: what's the real error? Is this even possible?
                throw 'Error: obj not found in zorder list for that page';
            }
            zlist.unshift(obj._id);
            pg._zorder = zlist.join();
        }

        function toBack(obj) {
            // DONE?
            if (!('_id' in obj))
                throw 'Error: toBack() must be given an object either from an event or getObj() or similar.';
            if (!('_pageid' in obj))
                throw 'Error: Could not find page for object.';

            var pg = getObj('page', obj._pageid);

            if (!('_id' in pg)) throw 'Error: Could not find page for object.';

            var zlist = pg._zorder.split(',');
            var pos = zlist.indexOf(obj._id);
            if (pos > -1) {
                zlist.splice(pos, 1);
            } else {
                // todo: what's the real error? Is this even possible?
                throw 'Error: obj not found in zorder list for that page';
            }
            zlist.push(obj._id);
            pg._zorder = zlist.join();
        }

        function Campaign() {
            // DONE
            return campaign;
        }

        function sendChat(speakingAs, input, cb, options) {
            cb = cb || function() {};
            options = options || {};

            var Message = {
                who: '',
                playerid: '',
                type: 'general',
                content: input
            };
            var sp;

            if (speakingAs.indexOf('|') !== -1) {
                var objDetails = speakingAs.split('|');
                // es6 really didn't like my deference assignment here
                var objType = objDetails[0];
                var objID = objDetails[1];
                switch (objType) {
                    case 'player':
                        sp = getObj('player', objID);
                        if (sp !== undefined)
                            Message.playerid = sp._id;
                        else
                            throw 'ERROR: Sendchat with illegal speakingAs player id';
                        break;
                    case 'character':
                        sp = getObj('character', objID);
                        if (sp !== undefined)
                            Message.playerid = sp._id;
                        else
                            throw 'ERROR: Sendchat with illegal speakingAs character id';
                        break;
                    default:
                        throw 'ERROR: Sendchat with illegal speakingAs type';
                }
            } else {
                Message.who = speakingAs;
                sp = findObjs({
                    _type: 'player',
                    _displayname: speakingAs
                });
                if (sp.length === 1)
                    Message.playerid = sp[0]._id;
            }

            if (input.startsWith('!')) {
                Message.type = 'api';
            }
            if (input.startsWith('/')) {
                // big assumption here
                var msgtype = input.split(' ')[0];
                switch(msgtype) {
                    case '/roll':
                        Message.type = 'rollresult';
                        break;
                    case '/gmroll':
                        Message.type = 'gmrollresult';
                        break;
                    case '/em':
                        Message.type = 'emote';
                        break;
                    case '/w':
                        Message.type = 'whisper';
                        break;
                    case '/desc':
                        Message.type = 'desc';
                        break;
                    case '/as':
                        Message.type = 'general';
                        break;
                    case '/emas':
                        Message.type = 'emote';
                        break;
                }
            }

            if (Message.type === 'whisper') {
                // todo: parse the recipient
                Message.target = '';
                Message.target_name = '';
            }
            if (Message.type.indexOf('rollresult') !== -1) {
                // todo: parse the roll
                Message.origRoll = Message.content;
                Message.inlinerolls = [];
                Message.rolltemplate = '';
            }
            if (Message.type === 'emote') {
                // todo: ?nothing special?
            }
            if (Message.type === 'api') {
                Message.selected = [];
            }

            var logmsg = 'CHAT: <' + Message.who + '> ' + Message.content;
            setTimeout(console.log, 0, logmsg);
            setTimeout(_triggerEvents, 0, 'chat:message', Message);
            setTimeout(cb, 0, Message);
        }

        function log(msg) {
            // DONE?
            console.log('LOG: ' + msg);
        }

        function randomInteger(max) {
            // DONE?
            // This is inferior to the real API's implementation but
            // no one should be using this for repeated calls.
            return Math.floor(Math.random() * max) + 1;
        }

        function playerIsGM(playerID) {
            // DONE?
            playerID = playerID || '';
            return true;
        }

        function spawnFx(x, y, type, pageID) {
            // DONE - no return
            x = x || 0;
            y = y || 0;
            type = type || 'beam-acid';
            pageID = pageID || Campaign().get('playerpageid');
        }

        function spawnFxBetweenPoints(point1, point2, type, pageID) {
            // DONE - no return
            point1 = point1 || {x: 0, y: 0};
            point2 = point2 || {x: 0, y: 0};
            type = type || 'beam-acid';
            pageID = pageID || Campaign().get('playerpageid');
        }

        function spawnFxWithDefinition(x, y, definitionJSON, pageID) {
            // DONE - no return
            x = x || 0;
            y = y || 0;
            definitionJSON = definitionJSON || '{}';
            pageID = pageID || Campaign().get('playerpageid');
        }

        function playJukeboxPlaylist(playListID) {
            // DONE - no return
            playListID = playListID || '';
        }

        function stopJukeboxPlaylist() {
            // DONE - no return
        }

        function sendPing(left, top, pageID, playerID, moveAll) {
            // DONE - no return
            left = left || 0;
            top = top || 0;
            pageID = pageID || Campaign().get('playerpageid');
            playerID = playerID || null;
            moveAll = moveAll || false;
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


exports.RollTwentyMock = RollTwentyMock;

// This is dirty. I'm sorry. (Not really.)
Object.keys(RollTwentyMock).forEach(function(key) {
    "use strict";
    global[key] = RollTwentyMock[key];
});
