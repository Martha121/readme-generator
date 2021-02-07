// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badgeImg;
  switch(license){
    case "Apache":
        // Add link to license here
        badgeImg = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
        break;
    case "GNU":
        // Add link to license here
        badgeImg = '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg) ';
        break;
    case "ISC":
        // Add link to license here
        badgeImg = '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
        break;
    case "MIT":
        // Add link to license here
        badgeImg = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        break;
    case "Mozilla":
        // Add link to license here
        badgeImg = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
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
  ## Questions
  
  Link to my GitHub profile:https://github.com/${data.username} <br/>
  If you have questions please contactme me at:${data.email}

  ## License
  This application is covered by the ${data.license} license.<br/>
  Link: ` + renderLicenseLink(data.license) + `. 
`;
}

module.exports = generateMarkdown;
