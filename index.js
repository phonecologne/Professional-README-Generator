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
    {
        //This is the meat and potatoes of your README. There shouldn't be a word count limit stopping people from written something that will be lost at +50 characters
        type: 'input',
        name: 'description',
        message: '(Required!) Lets write a short description of your project',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Only a short sentence describing your project is needed! Without one you could lose track of your projects!')
                return false;
            }
        }
    },
    {
        //This section will allow users to add directions or specifics intrsutions on how to use this project
        type: 'input',
        name: 'useage',
        message: '(Required!) Lets add some infomation on how a user will be using your project',
        validate: useageInput => {
            if (useageInput) {
                return true;
            } else {
                console.log('Its important to add some addtional information for users to know how to use your project for themselves. You can edit this later if your project changes');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'contents',
        message: 'Lets add some addtional information to your README by using the following checklist of what should be included to your README description',
        choices: [
            {
                name: 'Deployed Application',
                checked: false
            },
            {
                name: 'Installation',
                checked: false
            },
{
    name: 'Screenshots',
    checked: true
},

        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
