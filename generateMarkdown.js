// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if ((license = "MIT")) {
        return `![MIT](https://img.shields.io/badge/MIT-MIT-red)`;
    } else if ((license = "APACHE 2.0")) {
        return `![APACHE](https://img.shields.io/badge/APACHE-APACHE-green)`;
    } else if ((license = "GPL 3.0")) {
        return `![GPL](https://img.shields.io/badge/GPL-GPL-blue)`;
    } else if ((license = "BSD 3")) {
        return `![BSD](https://img.shields.io/badge/BSD-BSD-lightgrey)`;
    } else {
        return " ";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return `# **${answers.title}**
    
## Badge
${renderLicenseBadge("")}

## Table of Contents
- [Description] ${answers.description}
- [Screenshot] ${answers.screenshot}
- [Installation]${answers.installation}
- [Usage] ${answers.usage}
- [Contribution] ${answers.contribution}
- [Tests] ${answers.tests}
- [Questions] ${answers.questions}
- [Links] ${answers.repo}
- [Contact Me] ${answers.contact}

## Description
${answers.description}

## Screenshot
![](${answers.screenshot})

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Tests
${answers.tests}

## Questions
${answers.questions}

## GitHub Links
- Link to my GitHub Repo${answers.repo}
- Link to my GitHub Page${answers.github}

## Contact Me
${answers.contact}
    `;
}

module.exports = generateMarkdown;
