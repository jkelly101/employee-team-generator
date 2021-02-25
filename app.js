const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Manager");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Questions

const roleQuestion = {
  type: "list",
  name: "role",
  choices: ["Engineer", "Intern", "Manager"],
  message: "Choose your role.",
};

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name (first & last)?",
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

// 1 function to ask the initial question of who you are creating
function roles() {
  inquirer.prompt(roleQuestion).then((response) => {
    if (response.role == "Manager") {
      questions.push(managerQuestion);
      askQuestions();
    } else if (response.role == "Engineer") {
      questions.push(engineerQuestion);
      askQuestions();
    } else if (response.role == "Intern") {
      questions.push(internQuestion);
      askQuestions();
    }
  });
}

// 1 function for each of the object types to create (3 all together)
// after the questions of the current object are done, you call the initial question function
function askQuestions() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
  });
}
// Initialize inquirer with conditional questions based on chosen role.

function init() {
  roles();
}

// Create new objects
const employee = new Employee();
const manager = new Manager();
const engineer = new Engineer();
const intern = new Intern();

init();

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
