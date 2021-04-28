// TODO: Include packages needed for this application
const fs = require('fs');
// TODO: Create an array of questions for user input
const inquirer = require('inquirer');

// class Team {
//   constructor(name, id, title, email) {
//     this.name = name;
//     this.id = id;
//     this.title = title;
//     this.email = email;
//   };



inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of this team member?',
      name: '#Name',
    },
    {
      type: 'list',
      choices: ['Manager', 'Engineer', 'Intern'],
      message: 'What is his or her job title?',
      name: '##JobTitle',
    },
    {
      type: 'input',
      message: 'What is the id for this team member?',
      name: '##Id',
    },
    
    {
     type: 'input',
     validate: function(input){
         
         if (input.length > 6) return true;
         else return "Must be a valid email"
     },
     message: 'What is this email for this team member?',
     name: '##Email',
    },
  ])

  .then((response) =>{
    console.log(JSON.stringify(response, null, 2));
});