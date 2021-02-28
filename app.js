const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Questions
const selectRole = {
  type: "list",
  name: "role",
  choices: ["Engineer", "Intern", "Manager"],
  message: "Choose a role.",
};

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name (first & last)?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

const managerQuestion = {
  type: "input",
  name: "officeNumber",
  message: "What is your office number?",
};

const engineerQuestion = {
  type: "input",
  name: "gitHubUsername",
  message: "What is your GitHub username?",
};

const internQuestion = {
  type: "input",
  name: "school",
  message: "What is the name of your school?",
};

const employees = [];

// 1 function to ask the initial question of who you are creating
function roles() {
  console.log("Welcome, Manager! Let's  build your Team!");
  inquirer.prompt(selectRole).then((response) => {
    if (response.role == "Manager") {
      askQuestions(questions.concat(managerQuestion), "Manager");
    } else if (response.role == "Engineer") {
      askQuestions(questions.concat(engineerQuestion), "Engineer");
    } else if (response.role == "Intern") {
      askQuestions(questions.concat(internQuestion), "Intern");
    }
  });
}

const more = {
  type: "list",
  name: "continue",
  choices: ["yes", "no"],
  message: "Would you like to add more employees?",
};

function addMore() {
  inquirer.prompt(more).then((response) => {
    // console.log(response);
    if (response.continue == "yes") {
      roles();
    } else {
      // console.log(employees);
      writeHTML(outputPath, render(employees));
    }
  });
}

// 1 function for each of the object types to create (3 all together)
// after the questions of the current object are done, you call the initial question function
function askQuestions(arr, employeeType) {
  inquirer.prompt(arr).then((response) => {
    let employee;
    if (employeeType === "Intern") {
      employee = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
    } else if (employeeType === "Manager") {
      employee = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
    } else if (employeeType === "Engineer") {
      employee = new Engineer(
        response.name,
        response.id,
        response.email,
        response.gitHubUsername
      );
    }
    employees.push(employee);
    addMore();
  });
}
// Initialize inquirer with conditional questions based on chosen role.

function init() {
  roles();
}

init();

function writeHTML(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.log(err)
      : console.log("Success! You're Team has been created!");
  });
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
