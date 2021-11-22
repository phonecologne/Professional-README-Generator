// TODO: Include packages needed for this application
// Node JS Inquirer.js is being used for this project. require is makeing sure we have the NODE js package installed before moving forward
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        //Naming your Project. Includes the first question and the return question if the user trys to skips this question. I want to include text that lets the user know why answering this question is important
        type: 'input',
        name: 'title',
        //I wanted to ask What is your project's name, BUT the second apostropehe was breaking the code
        message: '(Required!) What is the name of your project.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Your project must be named! We can not proceed without one!');
                return false;
            }
        }
    },
    {
        //Linking your GitHub profile to your generated README. 
        type: 'input',
        name: 'github',
        message: '(Requried!) Enter your GitHub Profile Name.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('We need your GitHub Profile Name! We can not proceed without linking your GitHub!')
                return false;
            }
        }
    },
    {
        //After Linking your GitHub profile we are now going to link to the user repository for the project. 
        type: 'input',
        name: 'repo',
        message: '(Required!) Please enter the name of your GitHub Repository.'
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('We need the name of your GitHub repository! Without one we can not create a README for you!')
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
