// TODO: Include packages needed for this application
// Node JS Inquirer.js is being used for this project. require is makeing sure we have the NODE js package installed before moving forward
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        //I wanted to ask What is your project's name, BUT the second apostropehe was breaking the code
        message: '(Required!) What is the name of your project.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Your project must be named! We can not provide without one!');
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: '(Requried!) Enter your GitHub Profile Name',
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
