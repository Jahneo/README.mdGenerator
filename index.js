// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const generateMarkdown = require('./assets/generateMarkdown.js');
//console.log(inquirer);

//Success message
const success = chalk.greenBright(`
Great Success! README Generated! It's in the Output folder
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~// 
`);
const questions = [
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
        message: 'Please write a brief description of your project?',
      },
      
      {
        type: 'confirm',
        name: 'install',
        message: 'Would you like to provide installation instructions?',
        then:function (answers) {
          return answers.install;
      } 
    },
    {
      type: 'input',
      name: 'installs',
      message: `Please add your installation instructions`,
     then:function (answers) {
        return answers.install;
    }
  },
    
      {
        type: 'confirm',
        name: 'usage',
        message: 'would you like to provide user usage information?',
      
        type: 'input',
        name: 'usageInfo',
        message: `Please add your user usage info`,
      then: function (answers) {
          return answers.usage;
      }
    },
    
      {
        type: 'confirm',
        name: 'guides',
        message: 'Do you want to add contributing guidelines?',
      
        type: 'input',
        name: 'guidesLines',
        message: `Please add your what you want the user to know about contributing to the repo`,
        then: function (answers) {
          return answers.guides;
      }
    },
    
      {
        type: 'confirm',
        name: 'tests',
        message: 'Do you want to add test instructions?',
      },
      {
        type: 'input',
        name: 'testinfo',
        message: `Please add your instructions for running tests`,
        then: function (answers) {
           return answers.tests;
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
      name: 'creditInfo',
      message: `Please add your credits`,
      then: function (answers) {
        return answers.credits;
      }
  },
  ]

// TODO: Create a function to write README file

const writeToFile = (filename, data) => {
  fs.writeFile(filename,data, (err) =>
  err ? console.error(err) :console.log(success)
  );
}


// TODO: Create a function to initialize app
//Function to initialize the generator 
const init = async () => {
  try {
      const data = await inquirer.prompt(questions);
      writeToFile('./output/README.md', generateMarkdown(data));
  } catch (err) {
      console.log(err);
  }
}


// Function call to initialize app
init();
