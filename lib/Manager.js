// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(id, officeNumber) {
    this.id = id;
    this.officeNumber = officeNumber;

    super(id, name, email);
  }
}

module.exports = Employee;

// In addition to `Employee`'s properties and methods, `Manager` will also have:

//   * officeNumber

//   * getRole() // Overridden to return 'Manager'
