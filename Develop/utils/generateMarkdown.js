// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license == 'none') {
    return '';
  } else if (license == 'MIT') {
    
    return "![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)";
  } else if (license == 'GNU-GPLv3') {
     return "![GNU license](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (license == 'ISC') {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
  } else if (license == 'Apache') {
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicense(license) {
if (license == "none") {
  return "";
} else if (license == "MIT") {
  return "This project is using an MIT license.  https://opensource.org/licenses/MIT";
} else if (license == "GNU-GPLv3") {
  return "This project is using a GNU GPl v3 license.  https://www.gnu.org/licenses/gpl-3.0";
} else if (license == "ISC") {
  return "This project is using an ISC license.  https://opensource.org/licenses/ISC";
} else if (license == "Apache") {
  return "This project is using an Apache license.  https://opensource.org/licenses/Apache-2.0";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "none") {
    return `## ${license}`;
  }
  else return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}  
  
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributing](#contributing)
* [Testing](#testing)
* [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}
${renderLicense(data.license)}

## Contributing
${data.contribution}

## Testing
${data.tests}

## Contact
If you have any questions, contact me at ${
    data.email
  }. You can see more of my work at ${data.github}
  `;
}

module.exports = generateMarkdown;
