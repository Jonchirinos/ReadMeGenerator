// TODO: Include packages needed for this application
// node modules
const inquirer = require("inquirer");
// const jest = require("jest");
const fs = require("fs");
const generateMarkdown = require("./assets/generateMarkdown");
// const { file } = require("babel-types");

// TODO: Create an array of questions for user input
inquirer
    .prompt([
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
            name: "installation",
            type: "input",
            message: "How do you install the app?",
        },
        {
            name: "usage",
            type: "input",
            message: "What should the user do?",
        },
        {
            name: "screenshot",
            type: "input",
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
            name: "contact",
            type: "input",
            message: "Enter preferred contact email",
        },
        {
            name: "license",
            type: "list",
            message: "Which license was used for the application?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        },
    ])
    .then((answers) => {
        const data = generateMarkdown(answers);
        console.log("data", data);
        // generateMarkdown();
        function writeToFile(fileName, data) {
            fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log("Finished")));
            // fs.writeFile( file, data, options, callback )

            // TODO: Create a function to write README file
        }
        writeToFile("README.md", data);
    });
