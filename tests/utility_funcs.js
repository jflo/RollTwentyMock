/* jshint undef: true, unused: true, jasmine: true */
/* globals describe, it, expect */

'use strict';

require('../src/RollTwentyMock');

describe('randomInteger', function() {
    it('should return a number', function() {
        var n = randomInteger(4);
        expect(typeof n).toBe('number');
    });
    it('should always return N such that 0 < N < MAX', function() {
        const max = 5;
        var n;

        for (var iter = 0; iter < 100; iter++) {
            n = randomInteger(max);
            expect(n).toBeLessThan(max+1);
            expect(n).toBeGreaterThan(0);
        }
    });
});

describe('log', function() {
    it('should never return a value', function() {
        var r = log('test');
        expect(r).not.toBeDefined()
    });
    it('should call console.log with the parameter', function() {
        var msg = "testing123";
        console.log = jasmine.createSpy("log");
        log(msg);
        expect(console.log).toHaveBeenCalledWith("LOG: " + msg);
    });
});

// todo: duplicate spawnfx tests for spawnFxBetweenPoints, spawnFxWithDefinition, sendPing
describe('spawnFX', function() {
    it('should never return a value', function() {
        var r = spawnFx(500, 500, 'blood', Campaign().get('playerpageid'));
        expect(r).not.toBeDefined()
    });
    it('should not modify game state', function() {
        // todo: how to test for this?
    });
});

describe('playerIsGM', function() {
    it('should always return boolean', function() {
        var r = playerIsGM('12345');
        expect(typeof r).toBe('boolean');
    })
});
