var r20object = r20object || function () {
        function getNextID() {
            return 4;
        }

        function GameObject() {
            this._id = getNextID();
            this._type = "";
        }

        GameObject.prototype.get = function get(attr) {
            return this[attr];
        };

        GameObject.prototype.set = function get(attr, val) {
            this[attr] = val;
        };

        GameObject.prototype.remove = function remove() {

        };

        function createObj () {
            return new GameObject();
        }

        return {
            createObj: createObj
        };
    }();

exports.createObj = r20object.createObj;

// fake the rest until we implement them
[
    'getObj',
    'findObjs',
    'filterObjs',
    'getAllObjs',
    'getAttrByName',
    'toFront',
    'toBack'
].forEach(function(fn) {
    exports[fn] = function placeholder() {};
});
