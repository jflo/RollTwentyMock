/* jshint undef: true, unused: true, jasmine: true */
/* globals describe, it, expect */

'use strict';

require('../src/RollTwentyMock');

describe('sendChat', function() {
    it('should trigger chat events', function() {
        // clear all chat events
        // create a chat event
        // sendchat() to trigger it
        // make sure cb was called
    });
    it('should trigger chat events in the right order', function() {
        // clear all chat events
        // create 3 chat event, as in wiki example
        // sendchat() to trigger them
        // make sure the three cbs were called in the right order
    });
});
