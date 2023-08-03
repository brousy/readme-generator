// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown= require('./utils/generateMarkdown');
const fs = require('fs');
const path =require('path');
// TODO: Create an array of questions for user input
const questions = [
    // TODO: Move git hub and password to a new section under questions
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Git Hub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Git Hub email address?',

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project Title? ',

    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your description of the Project? ',
    },
    {
        type:'input',
        name:'installation',
        message:'Enter installation instructions: ',

    },
    {
        type:'input',
        name:'test',
        message:'Enter test instructions: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select what kind of license you want for your Project?',
        choices:[ "MIT", "Apache 2.0", "GPL", "BSD", "none"]
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information: ',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Enter contribution guidelines: ',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
     return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(
        (dataInfo) => {
            writeToFile('README.md', generateMarkdown({...dataInfo}) )
        }
    )
}

// Function call to initialize app
init();
