(function(objects) {
  class Student extends objects.Person {
    constructor(name, age, studentID) {
      super(name, age);
    }

    studies() {
      console.log(`${this._name} is studying!`);
    }
  }

  objects.Student = Student;
})(objects || (objects = {}));
