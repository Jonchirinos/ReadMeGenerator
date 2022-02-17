// TODO: Include packages needed for this application
// node modules
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// const { file } = require("babel-types");

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        name: "title",
        type: "input",
        message: "Project Title?",
    },
    {
        name: "description",
        type: "input",
        message: "Insert description of the project you have developed",
    },
    {
        name: "tests",
        type: "input",
        message: "How do you test the app?",
    },
    {
        name: "contribution",
        type: "input",
        message: "What were your contributions to the development of this app?",
    },
    {
        name: "instillation",
        type: "input",
        message: "How do you install the app?",
    },
    {
        name: "usage",
        type: "input",
        message: "What should the user do?",
    },
    {
        name: "languages/technologies",
        type: "checkbox",
        message: "Which Languages/Technologies were used?",
    },
    {
        name: "screenshot",
        type: "list",
        message: "Link to image of completed app?",
    },
    {
        name: "questions",
        type: "input",
        message: "Any questions concerning the app or its development?",
    },
    {
        name: "pages",
        type: "input",
        message: "Enter GitHub Pages URL",
    },
    {
        name: "repo",
        type: "input",
        message: "Enter GitHub Repo URL",
    },
    {
        name: "github",
        type: "input",
        message: "Enter your GitHub Username",
    },

    {
        name: "license",
        type: "list",
        message: "Which license was used for the application?",
    },
]).then((answers) => {
   const readMe = writeToFile("README.md", generateMarkdown(answers));


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log("Finished")));
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
