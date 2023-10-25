// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = () => inquirer.prompt([
    {
        type: 'input',
        name: 'ProjectName',
        message: 'What is the Project name?',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Description of Project',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'How to install application?(N/A if not needed)',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Describe how application should  be used',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
      },
      {
        type: 'list',
        name: 'licenses',
        message: 'Choose your license',
        choices: ['MIT License','Apache License 2.0','GNU General Public License (GPL) v3'],
      },
      {
        type: 'list',
        name: 'badges',
        message: 'Choose your badges',
        choices: ['Version Badge','License Badge','Build Status Badge (Travis CI)','Code Coverage Badge (Coveralls)','Code Quality Badge (Code Climate)','Downloads Badge (npm)',
                    'Stars Badge (GitHub)','Forks Badge (GitHub)'],
      }
     
]);

const readMe = ({ ProjectName,Description, Usage, github, email,license, Installation, badges }) =>`
# ${ProjectName}

## Description
${Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation
${Installation}

## Usage
${Usage}

## License
[![License](https://img.shields.io/badge/license-${license}-brightgreen)](LICENSE)
This project is licensed under the ${license} License.

## Badges
${badges}

## Questions
GitHub: [${github}](https://github.com/${github})
Email: ${email}
  `;
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     const userInputs = inquirer.prompt(questions);
// }

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) => writeFile('README.md',readMe(answers)))
    .then(() => console.log('Succesfully Wrote to README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
