// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(id, gitHub){
        this.id = id;
        this.gitHub = gitHub;
    };
    super(id, name, email);
    getGithub(){
    console.log(["GitHub"](`https://github.com/${this.gitHub}`))
    };
}

module.exports = Engineer;


// In addition to `Employee`'s properties and methods, `Engineer` will also have:

//   * github  // GitHub username

//   * getGithub()

//   * getRole() // Overridden to return 'Engineer'