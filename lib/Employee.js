// TODO: Write code to define and export the Employee class
class Employee {
  constructor(id, name, email) {
    (this.id = id), (this.name = name), (this.email = email);
  }
  getName() {
    console.log(this.name);
  }
  getEmail() {
    console.log(this.email);
  }
  getRole() {
    console.log(this.role);
  }
}

module.exports = Employee;

// The first class is an `Employee` parent class with the following properties and
// methods:

//   * name
//   * id
//   * email
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'
