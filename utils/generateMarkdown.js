// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link ="";
  switch(license){
    case "Apache":
        // Add link to license here
        link = "Liga de Apache";
        break;
    case "Academic":
        // Add link to license here
        break;
    case "GNU":
        // Add link to license here
        break;
    case "ISC":
        // Add link to license here
        break;
    case "MIT":
        // Add link to license here
        break;
    case "Mozilla":
        // Add link to license here
        break;
    case "Open":
        // Add link to license here
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
