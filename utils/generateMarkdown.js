// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badgeImg;
  switch(license){
    case "Apache":
        // Add link to license here
        badgeImg = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
        break;
    case "Academic":
        // Add link to license here
        badgeImg = 'https://opensource.org/licenses/AFL-3.0';
        break;
    case "GNU":
        // Add link to license here
        badgeImg = ' http://www.apache.org/licenses/LICENSE-2.0.txt ';
        break;
    case "ISC":
        // Add link to license here
        badgeImg = 'https://opensource.org/licenses/ISC';
        break;
    case "MIT":
        // Add link to license here
        badgeImg = 'https://opensource.org/licenses/MIT';
        break;
    case "Mozilla":
        // Add link to license here
        badgeImg = 'https://opensource.org/licenses/MPL-2.0';
        break;
    case "Open":
        // Add link to license here
        badgeImg = 'https://opensource.org/licenses/OSL-3.0';
        break;
    default:
        // Add link to license here
        badgeImg = "";
  }
  return badgeImg;
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link ="";
  switch(license){
    case "Apache":
        // Add link to license here
        link = ' http://www.apache.org/licenses/LICENSE-2.0.txt ';
        break;
    case "Academic":
        // Add link to license here
        link = 'https://opensource.org/licenses/AFL-3.0';
        break;
    case "GNU":
        // Add link to license here
        link = ' http://www.apache.org/licenses/LICENSE-2.0.txt ';
        break;
    case "ISC":
        // Add link to license here
        link = 'https://opensource.org/licenses/ISC';
        break;
    case "MIT":
        // Add link to license here
        link = 'https://opensource.org/licenses/MIT';
        break;
    case "Mozilla":
        // Add link to license here
        link = 'https://opensource.org/licenses/MPL-2.0';
        break;
    case "Open":
        // Add link to license here
        link = 'https://opensource.org/licenses/OSL-3.0';
        break;
    default:
        // Add link to license here
        link = "";
}
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  # ${data.projectTitle}
  ` + renderLicenseBadge(data.license)  + ` 
  ## Description
   ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
   ${data.installation}
  ## Usage
   ${data.usage}
  ## License
  This application is covered by the ${data.license} license.
  Link: ` + renderLicenseLink(data.license) + `. 
`;
}

module.exports = generateMarkdown;
