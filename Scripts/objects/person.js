let objects; // objects namespace or module
(function(objects) {
  // Person class
  let Person = (function() {
    function Person(name, age) {
      this._name = name;
      this._age = age;
    }

    Person.prototype.saysHello = function() {
      console.log(this._name + " says Hello!");
    };
    return Person;
  })();

  objects.Person = Person;
})(objects || (objects = {}));
