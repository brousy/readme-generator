// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none'){
    return `![github license](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license!== 'none'){
    return `- [license](#license)`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage



Provide instructions and examples for use. Include screenshots as needed.

## Credits



## License

${renderLicenseBadge(data.license)}

If you have any further questions and would like to contact me, please reach out to:
${data.email} . You can view my work at: ${data.Github}
`;
}

module.exports = generateMarkdown;
