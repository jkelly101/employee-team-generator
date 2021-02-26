// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // this.id = id;
    this.school = school;

    super(name, id, email);
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
