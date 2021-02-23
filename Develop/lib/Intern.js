// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(id, school) {
    this.id = id;
    this.school = school;

    super(id, name, email);
  }

  getSchool() {
    console.log(school);
  }
}

module.exports = Intern;

// In addition to `Employee`'s properties and methods, `Intern` will also have:

//   * school

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'
