
const fs = require('fs');

const inquirer = require('inquirer');


const managerQuestions = [
  {
    type: 'input',
    message: 'What is the team managers name?',
    name: 'managerName',
  }, 
  {
    type: 'input',
    message: 'What is the team managers id?',
    name: 'managerId',
  },
  {
    type: 'input',
    message: 'What is the managers email?',
    name: 'managerEmail',
  }, 
  {
    type: 'input',
    message: 'What is the managers office number?',
    name: 'officeNumber',
  }
];

const engineerQuestions = [
  {
    type: 'input', 
    message: 'What is the engineers name?',
    name: 'engineerName',
  }, 
  {
    type: 'input',
    message: 'What is the engineers id?',
    name: 'engineerId',
  }, 
  {
    type: 'input', 
    message: 'What is the engineers github username?',
    name: 'Github'
  }, 
  {
    type: 'input',
    message: 'What is the engineers email?', 
    name: 'engineerEmail',
  }
]; 

const internQuestions = [
  {
    type: 'input',
    message: 'What is the interns name?',
    name: 'internName',
  },
  {
    type: 'input',
    message: 'What is the interns id?',
    name: 'internId',
  },
  {
    type: 'input',
    message: 'What is the interns email?',
    name: 'internEmail',
  },
  {
    type: 'input',
    message: 'Which school did the intern attend?',
    name: 'School',
  },
];

function init() {
  inquirer
    .prompt(managerQuestions)
    .then(data => {
      console.log(data); 
      const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber)
      employees.push(manager);
      
    }
      )
}



// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is the name of this team member?',
//       name: '#Name',
//     },
//     {
//       type: 'list',
//       choices: ['Manager', 'Engineer', 'Intern'],
//       message: 'What is his or her job title?',
//       name: '##JobTitle',
//     },
//     {
//       type: 'input',
//       message: 'What is the id for this team member?',
//       name: '##Id',
//     },
    
//     {
//      type: 'input',
//      validate: function(input){
         
//          if (input.length > 6) return true;
//          else return "Must be a valid email"
//      },
//      message: 'What is this email for this team member?',
//      name: '##Email',
//     },
//   ])

//   .then((response) =>{
//     console.log(JSON.stringify(response, null, 2));
// });