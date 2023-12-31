// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
            category: "Questions",
        },
        {
          type: 'input',
          message: "What is the title of your project?",
          name: 'title',
        },
        {
          type: 'input',
          message: 'Give a description of your project',
          name: 'description',
          category: "Description",
        },
        {
          type: 'input',
          message: 'Explain how you install your project',
          name: 'install',
          category: "Installation",
        },
        {
          type: 'input',
          message: 'Add some usage information',
          name: 'information',
          category: 'Usage',
        },
        {
          type: 'input',
          message: 'Add the contribution guidelines',
          name: 'contribution',
          category: 'Contributing'
        },
        {
          type: 'input',
          message: 'Add the instructions on how to run tests',
          name: 'tests',
          category: 'Tests',
        },
        {
          type: 'list', 
          message: 'What license do you have?',
          name: 'license',
          choices: ['Mozilla Public License 2.0', 'MIT'],
          category: 'License'
        },
        {
          type: 'input',
          message: 'What is your email?',
          name: 'email',
          category: "Questions",
        },
        {
          type: 'input',
          message: 'What is your Github username?',
          name: 'github',
          category: 'Questions',
        },
        {
          type: 'list',
          message: 'What is the best way to reach you?',
          name: 'reach',
          choices: ['Email', 'Github', 'Phone'],
          category: 'Questions',
        },
]
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./md/README.md`, generateMarkdown(data), (err) => {
    if(err) {
      throw err
    } else {
      console.log("Readme created!")
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer 
    .prompt(questions)
    .then((data) => { 

        fs.writeFile(`./md/README.md`, generateMarkdown(data), (err) => {
          if(err) {
            throw err
          } else {
            console.log("Readme created!")
          }
        });
      })
}

// Function call to initialize app
init();