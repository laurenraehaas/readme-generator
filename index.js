// TODO: Include packages needed for this application
const inquirer = require('inquirer')
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
          message: 'What licence do you have?',
          name: 'license',
          choices: ['ISC', 'MIT'],
          category: 'Licence'
        },
        {
          type: 'input',
          message: 'What is your email?',
          name: 'email',
          category: "Questions",
        },
]
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();