// TODO: Write code to define and export the Employee class
class Employee {
    constructor(id, name, email){
        this.id = id,
    this.name = name,
    this.email = email
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