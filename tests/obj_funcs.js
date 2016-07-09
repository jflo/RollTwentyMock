/* jshint undef: true, unused: true, jasmine: true */
/* globals describe, it, expect */

'use strict';

require('../src/RollTwentyMock');

describe('Campaign()', function() {
    it('should return a campaign object', function() {
        var c = Campaign();
        expect(c._id).toBeDefined();
        expect(c._type).toBe('campaign');
    });
});

describe('getObj()', function() {

});
describe('findObjs()', function() {

});
describe('filterObjs()', function() {
    it('should return all objects if passed no param', function() {
        var r = filterObjs();
        var db = getAllObjs();
        expect(r).toEqual(db);
    });
    it('should return nothing if passed false', function() {
        var r = filterObjs(function(){return false;});
        expect(r).toEqual([]);
    });
    it('should only be able to return one campaign object', function() {
        var c = filterObjs(function(e) {
            return (e._type === 'campaign');
        });
        expect(c.length).toBe(1);
        expect(c).toEqual([Campaign()]);
    });
});
describe('getAllObjs()', function() {
    it('should have a bunch of stuff in it', function() {
        var gameobjs = getAllObjs();
        expect(gameobjs.length).toBeGreaterThan(1);
    });
});

describe('getAttrByName()', function() {

});
