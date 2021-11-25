// TODO: Include packages needed for this application
// Node JS Inquirer.js is being used for this project. require is makeing sure we have the NODE js package installed before moving forward
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create a list of questions for user input
        //Naming your Project. Includes the first question and the return question if the user trys to skips this question. I want to include text that lets the user know why answering this question is important
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
        message: '(Required!) Please enter the name of your GitHub Repository.',
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
            {
                name: 'Built With',
                checked: true
            },
            {
                name: 'License',
                checked: false
            },
            {
                name: 'Contributing',
                checked: false
            },
            {
                name: 'Tests',
                checked: false
            },
            {
                name: 'Questions',
                checked: true
            },
            {
                name: 'Credits',
                checked: true
            },
        ]
    },
    {
        type: 'input',
        name: 'link',
        message: 'Lets enter the link for where you hosted your project. For example, GitHub can host your project if you enabled GitHub to your repository.',
        when: ({ contents }) => {
            if (contents.indexOf('Deployed Application') > -1) {
                return true;
            } else {
                return false;
            }
        },
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('Ahh! You forgot to enter a link! If its not a GitHub link thats OK too!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please list all your packages you used',
        when: ({ contents }) => {
            if (contents.indexOf('Installation') > -1) {
                return true;
            } else {
                return false;
            }
        },
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please check the lisenses you used for your project',
        choices: ['MIT', 'GNU', 'Apache 2.0', 'ISC'],
        default: 0,
        when: ({ contents }) => {
            if (contents.indexOf('License' > -1)) {
                return true;
            } else {
                return false;
            }
        },
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Dont forget to give credit to the licenses you used for your project! Its the right thing to do!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'built with',
        message: 'Please check the elements that use have applied to your project',
        choices: ['HTML', 'CSS', 'SASS', 'JavaScript', 'NODE.JS', 'Express.JS'],
        default: 0,
        when: ({ contents }) => {
            if (contents.indexOf('Built With') > -1) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If someone would like to contribute to your project, do you have any guidelines you would like them to follow?',
        when: ({ contents }) => {
            if (contents.indexOf('Contributing') > -1) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('It is important to set some guidelines for people who want to contribute. Otherwise your hard work can be lost or stolen but others who have honest or innocent intentions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Now please enter any applicable test information for your project',
        when: ({ contents }) => {
            if (contents.indexOf('Tests') > -1) {
                return true;
            } else {
                return false;
            }
        },
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('You need to let users know what tests you require them to install before they pull your work by having this information on your README');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Lets include your email address so contributors can reach out to you directly if they have any questions',
        when: ({ contents }) => {
            if (contents.indexOf('Questions') > -1) {
                return true;
            } else {
                return false;
            }
        },
        validate: questionsInput => {
            if (questionsInput) {
                return true;
            } else {
                console.log('You want people to reach out to your email address to ask questions or even give you a small thank you!');
                return false;
            }
        }
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log('README generated for you!')
    });
};
// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};
// Function call to initialize app
init()
    .then(userResponse => {
        if (Response.contents.indexOf('Credits') > -1) {
            return addCredits(Response);
        } else {
            return response;
        }
    })
    .then(answers => generateMarkdown(answers))
    .then(generatedReadme => writeToFile('README.md', generatedReadme))
        .cath(err => {
            console.log(err);
        });