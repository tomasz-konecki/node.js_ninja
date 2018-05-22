var EventEmitter = require("events");
var util = require("util");
// var myEmitter = new events.EventEmitter();

// myEmitter.on("someEvent", function(mssg) {
//   console.log(mssg);
// });

// myEmitter.emit("someEvent", "the event was emitted");

class Person extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

// util.inherits(Person, events.EventEmitter);
// Note: usage of util.inherits() is discouraged. Please use the ES6 class and extends keywords

var james = new Person("james");
var mary = new Person("mary");
var ryu = new Person("ryu");
var people = [james, mary, ryu];

people.forEach(function(person) {
  person.on("speak", function(mssg) {
    console.log(person.name + " said: " + mssg);
  });
});

james.emit("speak", "hello there!");
ryu.emit("speak", "hi everyone!");
