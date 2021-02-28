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

const selectRole = {
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

function roles() {
  console.log("Welcome, Manager! Let's build your Team!");
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
    if (response.continue == "yes") {
      roles();
    } else {
      writeHTML(outputPath, render(employees));
    }
  });
}

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

function init() {
  roles();
}

init();

function writeHTML(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.log(err)
      : console.log("Success! Your Team has been created!");
  });
}
