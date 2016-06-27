var RollTwentyMock = RollTwentyMock || function () {
  var eventMap = {}
  var gameObjects = []
  var objectCounter = 100

  function GameObject () {
    this._id = ++objectCounter
  }

  // GameObject.prototype.print = function print () {
  //   console.log('Object #' + this._id + 'details:')
  // }

  function triggerEvents (evt, details) {
    // Events are fired synchronously (meaning each function won't start until the
    // previous one has finished) in order from first-bound to last-bound, and also
    // from specific property to general object. So given the following:
    //        on("change:graphic", function1);
    //        on("change:graphic", function2);
    //        on("change:graphic:left", function3);
    // If the objects left property changed, then the order would be function3, then
    // function1, then function2.
    while (evt.indexOf(':') != -1) {

    }
  }

  function on (evt, f) {
    if (evt in eventMap) {
      eventMap[evt].push(f)
    } else {
      eventMap[evt] = [f]
    }
  }

  function sendChat (who, msg) {
    triggerEvents('chat:message', msg)
  }

  function findObjs (needle) {
    // let's get the search details just once
    var terms = Object.getOwnPropertyNames(needle)
    var numTerms = terms.length
    return gameObjects.filter(function searcher (o) {
      var matches = 0
      for (var x = 0; x < numTerms; x++) {
        if (terms[x] in o) {
          if (o[terms[x]] === needle[terms[x]]) {
            matches += 1
          } else {
            return false
          }
        } else {
          return false
        }
      }
      return matches === numTerms
    })
  }

  return {
    'on': on,
    'sendChat': sendChat,
    'findObjs': findObjs,
    'foo': 4
  }
}()

exports.on = RollTwentyMock.on;
exports.sendChat = RollTwentyMock.sendChat;
exports.findObjs = RollTwentyMock.findObjs;

// RollTwentyMock.findObjs({_id: 102})[0].print()
