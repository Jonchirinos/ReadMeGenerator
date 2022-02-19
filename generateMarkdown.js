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
const generateMarkdown = (answers) => {
    return;
    `# ${data.title}${renderLicense(answers.licenseType)}
### ${answers.description}
## Table of Contents
#Installation Instructions
### Author
### {answers.author} 
`;
};

module.exports = generateMarkdown;
