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

});
describe('getAllObjs()', function() {

});

describe('getAttrByName()', function() {

});
