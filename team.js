// TODO: Include packages needed for this application
const fs = require('fs');
// TODO: Create an array of questions for user input
const inquirer = require('inquirer');

class Team {
  constructor(name, id, title, email) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
  }

  printInfo() {
    console.log(`This vehicle has ${this.numberOfWheels} wheels`);
    console.log(`This vehicle has an id of ${this.id}`);
  }

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of this team member?',
      name: '#Name',
    },
    {
      type: 'input',
      message: 'What is his or her job title?',
      name: '##',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      name: '##Installation',
    },
    {
     type: 'input', 
     message: 'Provide Instructions and examples for use. Include screenshots as needed.',
     name: '##Usage',
    },
   
   
    
    {
     type: 'input', 
     message: 'What is your github username?',
     name: '##Questions',
    },
    {
     type: 'input',
     validate: function(input){
         
         if (input.length > 6) return true;
         else return "Must be a valid email"
     },
     message: 'What is your email?',
     name: '##Questions',
    }
  ])