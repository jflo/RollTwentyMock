/* jshint undef: true, unused: true, jasmine: true */
/* globals describe, it, expect */

'use strict';

require('../src/RollTwentyMock');

const expectedFunctions = [
    'Campaign',

    'getAttrByName',
    'createObj',
    'getObj',
    'findObjs',
    'filterObjs',
    'getAllObjs',

    'on',

    'sendChat',

    'log',
    'toFront',
    'toBack',
    'randomInteger',
    'playerIsGM',
    'spawnFx',
    'spawnFxBetweenPoints',
    'spawnFxWithDefinition',
    'playJukeboxPlaylist',
    'stopJukeboxPlaylist',
    'sendPing'
];
const expectedCount = expectedFunctions.length;


describe('RollTwentyMock', function() {
    describe('state', function() {
        it('should be registered as a global', function() {
            expect(state).toBeDefined();
        });
        it('should be an object', function() {
            var t = typeof state;
            expect(t).toBe('object');
        });
        it('should be able to store and retrieve arbitrary data', function() {
            state.foo = 4;
            expect(state.foo).toBe(4);
            state.bar = [7.4, '13', 'horse', true];
            expect(state.bar[2]).toBe('horse');
            state.bar.push('ZZZZ');
            expect(state.bar[4]).toBe('ZZZZ');
        });
    });
    it('should export all the official API functions to GLOBAL', function() {
        for (var x = 0; x < expectedCount; x++) {
            var fn = expectedFunctions[x];
            expect(global[fn]).toBeDefined();

            var t = typeof global[fn];
            expect(t).toBe('function');
        }
    });
});
