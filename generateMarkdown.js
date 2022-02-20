// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(type) {
    if (type !== "none") {
        return `[${type}](https://)`;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return;
    `# **${answers.title}${renderLicense(answers.licenseType)}**

=

## Table of Contents
-[Description]${answers.description}
-[Screenshot]${answers.screenshot}
-[Installation]${answers.installation}
-[Usage]${answers.usage}
-[Contribution]${answers.contribution}
-[Tests]${answers.tests}
-[Questions]${answers.questions}
-[Links]${answers.repo}
-[Contact Me]${answer.contact}

## Description
${answers.description}

## Screenshot
${answers.screenshot}

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
-${answers.repo}
-${answers.github}

## Contact Me
${answers.contact}
`;
}

module.exports = generateMarkdown;
