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
-[Description]${answers.}
-[Screenshot]${answers.}
-[Installation]${answers.}
-[Usage]${answers.}
-[Contribution]${answers.}
-[Tests]${answers.}
-[Questions]${answers.}
-[GitHub Links]${answers.}
-[Contact Me]${answers.}

## Description
${answers.description}

## Screenshot
${answers.description}

## Installation
${answers.description}

## Usage
${answers.description}

## Contribution
${answers.description}

## Tests
${answers.description}

## Questions
${answers.description}

## GitHub Links
${answers.description}

## Contact Me
${answers.description}
`;
};

module.exports = generateMarkdown;
