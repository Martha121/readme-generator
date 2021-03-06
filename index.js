// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions =[
        {
            type: "input",
            name: "projectTitle",
            message: "Write your Title's project",
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: "input",
            name: "description",
            message: "Write a description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Write the steps to install the project: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Write instructions for use:"
        },
        {
            type: "input",
            name: "collaborators",
            message: "List your collaborators"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        }
        
    ];
    inquirer
        .prompt(questions)
        .then((answers) => {
                console.log(answers);
            var fileName = "readme_generated.md";
            // genrate markdown text
            var markdownText = generateMarkdown(answers);
            // write markdown text to file
            writeToFile(fileName, markdownText);
        });

 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



