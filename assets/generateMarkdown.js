// TODO: Create a function that returns the license link
const renderLicenseBadge = (license) => { 
}
    function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README

// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
  return `

 # The title of the page**${data.title}**
 
 # Table of Contents
 * [Project Description](#project-description)
 * [Installation](#installation)
 * [Usage](#usage)
 * [Contribution](#contribution)
 * [Test](#test)
 * [License](#license)
 * [License Badge](#License-Badges)
 * [Credit](#credits)
 * [Questions](#questions)

 # Project Description
 ${data.description}

 # Installation
 ${data.installs}

 # Usage
 ${data.usageInfo}

 # Contribution
 ${data.guidesLines}

 # Test
 ${data.testinfo}

 # License
 ${data.licences}

 # License Badge
 # [![License Badge](https://img.shields.io/badge/License-${data.licences}%202.0-blue.svg)](https://opensource.org/licenses/${data.licences})

 # Credit
 ${data.creditInfo}

 # Questions
  If you have any questions, please contact  ${data.name}  the project owner by clicking on the email listed below.  
  
  
  #### ${data.email !== null ? "[" + data.email + "](mailto:" + data.email + ")" : "This user's email is private."}
  ![Github link](https://github.com/${data.github}) 
`;
}




module.exports = generateMarkdown;