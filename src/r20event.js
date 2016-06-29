var r20event = r20event || function () {
        var eventList = [];
        var self = this;

        function Roll20Event(trigger, cb) {
            this.trigger = trigger;
            this.cb = cb;
        }
        Roll20Event.prototype.run = function eventRun(details) {
            this.cb();
        };

        function triggerEvents(evt, details) {
            // Events are fired synchronously (meaning each function won't start until the
            // previous one has finished) in order from first-bound to last-bound, and also
            // from specific property to general object. So given the following:
            //        on("change:graphic", function1);
            //        on("change:graphic", function2);
            //        on("change:graphic:left", function3);
            // If the objects left property changed, then the order would be function3, then
            // function1, then function2.

            while (evt.indexOf(':') != -1) {
                eventList.forEach(function(e) {
                    if (e.trigger == evt) {
                        e.run(details);
                    }
                });

                evt = evt.replace(/:[\w]+$/, '');
            }
        }

        function on(trigger, cb) {
            var e = new Roll20Event(trigger, cb);
            eventList.push(e);
        }

        return {
            triggerEvents: triggerEvents,
            on: on
        };
    }();

Object.keys(r20event).forEach(function(key){
    exports[key] = r20event[key];
});
