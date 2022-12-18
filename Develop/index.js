// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the your github username?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    message: "Provide a short description of your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "Provide a step by step description of how to install your project.",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide usage instructions and examples.",
    name: "usage",
  },
  {
    type: "input",
    message: "List any collaborators and third party assets used.",
    name: "credits",
  },
  {
    type: "list",
    message: "Select a license to use.",
    name: "license",
    choices: ["MIT", "Apache", "GNU-GPLv3", "ISC", "none"],
  },
  {
    type: "input",
    message: "How can someone contribute to your project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "Do you have any examples for testing your application?",
    name: "tests",
  },
];

  function createReadMe(readMe, data) {
    fs.writeFile(`./${readMe.toUpperCase().split(' ').join('')}.md`, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Your README has been generated.")
    })
  };


// TODO: Create a function to initialize app

function init () {
    inquirer.prompt(questions)
    .then((response) => {
        createReadMe('README', generateMarkdown({...response}))
    })
};

// Function call to initialize app
init();
