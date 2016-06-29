 // var defaults = require('./ObjectDefaults.json');
 //
 //        function GameObject() {
 //            this._id = -1;
 //
 //        }
 //
 //        GameObject.prototype.
 //
 //        var GameObjectManager = {
 //            nextID: 100,
 //            getNextID: function getNextID() {
 //                this.nextID += 1;
 //                return this.nextID;
 //            },
 //            foo: 4
 //        };
 //
 //
 //        function GameObject() {
 //            /*jshint camelcase: false */
 //
 //            // "private" vars
 //            this._id = ++objectCounter;
 //            this._type = 'undef';
 //            this._pageid = '4';
 //            this._path = '[["M", 0, 35],["C", 0, 17.5, 17.5, 0, 35, 0],' +
 //                '["C", 52.5, 0, 70, 17.5, 70, 35],["C", 70, 52.5, 52.5, 70, 35, 70],' +
 //                '["C", 17.5, 70, 0, 52.5, 0, 35]]';
 //            this._subtype = 'token';
 //            this._cardid = '4';
 //            this._zorder = '';
 //            this._journalfolder = '{}';
 //            this._jukeboxfolder = '{}';
 //            this._d20userid = '12345';
 //            this._displayname = 'empty';
 //            this._online = false;
 //            this._lastpage = '';
 //            this._macrobar = '';
 //            this._playerid = '12345';
 //            this._rollabletableid = '';
 //            this._defaulttoken = '';
 //            this._currentDeck = '';
 //            this._currentIndex = -1;
 //            this._currentCardsShown = true;
 //            this._cardSequencer = -1;
 //            this._discardPile = '';
 //            this._deckid = '';
 //            this._currentHand = '';
 //
 //            // for path objects
 //            this.fill = 'transparent';
 //            this.stroke = '#000000';
 //            this.rotation = 0;
 //            this.layer = '';
 //            this.stroke_width = 5;
 //            this.width = 25;
 //            this.height = 25;
 //            this.top = 0;
 //            this.left = 0;
 //            this.scaleX = 1;
 //            this.scaleY = 1;
 //            this.controlledby = '';
 //            // for text objects
 //            this.text = '';
 //            this.font_size = 16;
 //            this.color = 'rgb(0, 0, 0)';
 //            this.font_family = 'unset';
 //            // for graphic objects
 //            this.imgsrc = '';
 //            this.bar1_link = '';
 //            this.bar2_link = '';
 //            this.bar3_link = '';
 //            this.represents = '4';
 //            this.isdrawing = false;
 //            this.flipv = false;
 //            this.fliph = false;
 //            this.name = '';
 //            this.gmnotes = '';
 //            this.bar1_value = 50;
 //            this.bar2_value = 50;
 //            this.bar3_value = 50;
 //            this.bar1_max = 100;
 //            this.bar2_max = 100;
 //            this.bar3_max = 100;
 //            this.aura1_radius = '';
 //            this.aura2_radius = '';
 //            this.aura1_color = '#FFFF99';
 //            this.aura2_color = '#59E594';
 //            this.aura1_square = false;
 //            this.aura2_square = false;
 //            this.tint_color = 'transparent';
 //            this.statusmarkers = '';
 //            this.showname = false;
 //            this.showplayers_name = false;
 //            this.showplayers_bar1 = false;
 //            this.showplayers_bar2 = false;
 //            this.showplayers_bar3 = false;
 //            this.showplayers_aura1 = false;
 //            this.showplayers_aura2 = false;
 //            this.playersedit_name = false;
 //            this.playersedit_bar1 = false;
 //            this.playersedit_bar2 = false;
 //            this.playersedit_bar3 = false;
 //            this.playersedit_aura1 = false;
 //            this.playersedit_aura2 = false;
 //            this.light_radius = '';
 //            this.light_dimradius = '';
 //            this.light_otherplayers = false;
 //            this.light_hassight = false;
 //            this.light_angle = '360';
 //            this.light_losangle = '360';
 //            this.lastmove = '';
 //            this.light_multiplier = '1';
 //            // for page objects
 //            this.showgrid = true;
 //            this.showdarkness = false;
 //            this.showlighting = false;
 //            this.snapping_increment = 1;
 //            this.grid_opacity = 0.5;
 //            this.fog_opacity = 0.35;
 //            this.gridcolor = '#C0C0C0';
 //            this.grid_type = 'square';
 //            this.scale_number = 5;
 //            this.scale_units = 'ft';
 //            this.gridlabels = false;
 //            this.diagonaltype = 'foure';
 //            this.archived = false;
 //            this.lightupdatedrop = false;
 //            this.lightenforcelos = false;
 //            this.lightrestrictmove = false;
 //            this.lightglobalillum = false;
 //            // // for campaign objects
 //            // this.turnorder = '';
 //            // this.initiativepage = false;
 //            // this.playerpageid = false;
 //            // this.playerspecificpages = false;
 //
 //            // for player objects
 //
 //            this.speakingas = '';
 //            this.showmacrobar = false;
 //            // for macro objects
 //            this.action = '';
 //            this.visibleto = '';
 //            this.istokenaction = false;
 //            // for rollable table objects
 //            this.showplayers = true;
 //            // for table item objects
 //            this.avatar = '';
 //            this.weight = 1;
 //            // for character objects
 //            this.bio = '';
 //            this.inplayerjournals = '';
 //            // for attribute objects
 //            this.current = '';
 //            this.max = '';
 //            // for ability objects
 //            this.description = '';
 //            // for handout objects
 //            // for deck objects
 //            this.playerscandraw = true;
 //            this.shown = false;
 //            this.players_seenumcards = true;
 //            this.players_seefrontofcards = false;
 //            this.gm_seenumcards = true;
 //            this.gm_seefrontofcards = false;
 //            this.infinitecards = false;
 //            this.cardsplayed = 'faceup';
 //            this.defaultheight = '';
 //            this.defaultwidth = '';
 //            this.discardpilemode = 'none';
 //            // for card objects
 //            // for hand objects
 //            this.currentView = 'bydeck';
 //            // for jukebox track objects
 //            this.playing = false;
 //            this.softstop = false;
 //            this.title = '';
 //            this.volume = 30;
 //            this.loop = false;
 //        }
 //
 //        GameObject.prototype.get = function get(attr) {
 //            return this[attr];
 //        };
 //
 //        GameObject.prototype.set = function get(attr, val) {
 //            this[attr] = val;
 //        };
 //
 //        GameObject.prototype.remove = function remove() {
 //
 //        };
 //
 //        var campaign = new GameObject();
 //        var state = {};
 //        var eventMap = {};
 //
 //        var gameObjects = [];
 //        var objectCounter = 100;
 //        // todo: should _id be its index in gameObjects for O(1) lookups by id?
 //        //    cons: how do you handle removed objects? add a flag and don't return them?
 //
 //        function initCampaign() {
 //            campaign.turnorder = '';
 //            campaign.initiativepage = false;
 //            campaign.playerpageid = false;
 //            campaign.playerspecificpages = false;
 //        }
 //
 //        function Campaign() {
 //            return campaign;
 //        }
 //
 //        function triggerEvents(evt, details) {
 //            // Events are fired synchronously (meaning each function won't start until the
 //            // previous one has finished) in order from first-bound to last-bound, and also
 //            // from specific property to general object. So given the following:
 //            //        on("change:graphic", function1);
 //            //        on("change:graphic", function2);
 //            //        on("change:graphic:left", function3);
 //            // If the objects left property changed, then the order would be function3, then
 //            // function1, then function2.
 //            while (evt.indexOf(':') !== -1) {
 //
 //            }
 //        }
 //
 //        function on(evt, f) {
 //            if (evt in eventMap) {
 //                eventMap[evt].push(f);
 //            } else {
 //                eventMap[evt] = [f];
 //            }
 //        }
 //
 //        function sendChat(who, msg) {
 //            triggerEvents('chat:message', msg);
 //        }
 //
 //        function createObj(type, attributes) {
 //
 //        }
 //
 //        function getObj(type, id) {
 //
 //        }
 //
 //        function findObjs(needle) {
 //            // let's get the search details just once
 //            var terms = Object.getOwnPropertyNames(needle);
 //            var numTerms = terms.length;
 //            return gameObjects.filter(function searcher(o) {
 //                var matches = 0;
 //                for (var x = 0; x < numTerms; x++) {
 //                    if (terms[x] in o) {
 //                        if (o[terms[x]] === needle[terms[x]]) {
 //                            matches += 1;
 //                        } else {
 //                            return false;
 //                        }
 //                    } else {
 //                        return false;
 //                    }
 //                }
 //                return matches === numTerms;
 //            });
 //        }
 //
 //        function filterObjs(cb) {
 //
 //        }
 //
 //        function getAllObjs() {
 //            return gameObjects;
 //        }
 //
 //        // function getAttrByName(character_id, attribute_name, value_type) {}
 //
 //
 //        // function toFront(obj) {}
 //        // function toBack(obj) {}
 //        // function randomInteger(max) {}
 //        // function playerIsGM(playerid) {}
 //        function spawnFx(x, y, type, pageid) {
 //            // DONE - no return
 //        }
 //
 //        function spawnFxBetweenPoints(point1, point2, type, pageid) {
 //            // DONE - no return
 //        }
 //
 //        // function sendPing(left, top, pageid, (optional) playerid, (optional) moveAll) {}
