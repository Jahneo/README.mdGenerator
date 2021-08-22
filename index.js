// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//console.log(inquirer);
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is title of your project?',
    },
    {
      type: 'input',
       name: 'name',
       message: 'What is your name?',
    },
    {
      type: 'input',
       name: 'github',
       message: 'What is your GitHub profile?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: function(value) 
                {
                    let pass = value.match (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    );
                    if(pass) {
                         return true;
                     }
                     return 'You have entered an invalid email address!';
                    
                },
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Would you like to give a brief description of your project?',
      },
      
      {
        type: 'confirm',
        name: 'install',
        message: 'What you like to provide installation instructions?',
      },
      {
        type: 'input',
        name: 'installNotes',
        message: `Please add your installation notes`,
        when: function (answers) {
            return answers.install;
        }
    },
      {
        type: 'confirm',
        name: 'usage',
        message: 'What you like to provide user usage information?',
      },
      
      {
        type: 'input',
        name: 'usageInfo',
        message: `Please add your usage info`,
        when: function (answers) {
            return answers.usage;
        }
    },
    
      {
        type: 'confirm',
        name: 'guides',
        message: 'Do you want to add contributing guidelines?'
      },
      {
        type: 'input',
        name: 'contribNotes',
        message: `Please add your what you want the user to know about contributing to the repo`,
        when: function (answers) {
            return answers.guides;
        }
    },
    
      {
        type: 'confirm',
        name: 'test',
        message: 'Do you want to add test instructions?'
      },
      {
        type: 'input',
        name: 'testNotes',
        message: `Please add your instructions for running tests`,
        when: function (answers) {
            return answers.test;
        }
      },
    {
      type: 'rawlist',
      name: 'licences',
      message: 'What are the licenses you want to use?',
      
      choices: ['none','GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0','Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0'],
      
    },
    {
        type: 'confirm',
        name: 'credits',
        message: `Would you like to add any credits to the repo?`,
    },
    {
      type: 'input',
      name: 'creditData',
      message: `Please add your credits`,
      when: function (answers) {
          return answers.credits;
      }
  },
  ])

// TODO: Create a function to write README file

const writeToFile = (fileName, data) => {
  fs.writeFile(filename,data, (err) =>
  err ? console.error(err) :console.log(success)
  );
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
