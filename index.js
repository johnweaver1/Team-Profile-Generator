const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
teamArray = [];

function start() {
    function addMember() {
        inquirer.prompt([
            {
                type: 'imput',
                name: 'name',
                message: 'Enter the employees name.'
            },
            {
                type: 'list',
                name: 'position',
                message: 'Enter position of employee',
                choices: ["Manager", "Engineer", "Intern"]
            }
        ]).then(function(input){
            switch(input.position) {
                case "Manager":
                    createManager();
                    break;
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
            }
        })
        function createManager() {
            inquirer
            .prompt ([
                {
                    type: 'input',
                    name: 'Mid',
                    message: 'What is the employee ID?',
                },
                {
                    type: 'input',
                    name: 'emailID',
                    message: 'What is the email?',
                },
                {
                    type: 'input',
                    name: 'officeN',
                    message: 'Managers must put in their office number',
                },
            ]).then(answers => {
                const manager = new Manager(answers.name, answers.Mid, answers.emailID, answers.officeN);
                teamArray.push(manager);
                addMember();
            })
        }

        function createEngineer() {
            inquirer
            .prompt ([
                {
                    type: 'input',
                    name: 'Eid',
                    message: 'What is the employee ID?',
                },
                {
                    type: 'input',
                    name: 'emailId',
                    message: 'What is the email?',
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Engineers put their github page here!'
                },
            ]).then(answers => {
                const engineer = new Engineer(answers.name, answers.Eid, answers.emailId, answers.github);
                teamArray.push(engineer);
                addMember();
            })
        }
        function createIntern() {
            inquirer
            .prompt ([
                {
                    type: 'input',
                    name: 'Iid',
                    message: 'What is the employee ID?',
                },
                {
                    type: 'input',
                    name: 'emailid',
                    message: 'What is the email?',
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Interns put their school here'
                },
            ]).then(answers => {
                const intern = new Intern(answers.name, answers.Iid, answers.emailid, answers.school);
                teamArray.push(intern);
                finalStart();
            })
        }
        
    }
    function finalStart() {
        inquirer
        .prompt ([
          {
            type: 'confirm',
            name: 'continue',
            message: 'Do you want to add another?',
          

          },
        ]).then((teamArray) => {
          
          const PageContent = generateHTML(teamArray);
      
          fs.writeFile('./dist/index.html', PageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html')
          );
        });

        
      }
 
addMember();
}

const generateHTML = (teamArray) => {

    console.log(teamArray);
    let {name, position, Iid, Eid, Mid, emailID, emailId, emailid, officeNumber, github, school} = teamArray;
  
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Document</title>
    </head>
    
    <header class="jumbotron jumbotron-fluids bg-danger bg-gradient">
        <h1 class="text-center text-white"> My Team</h1>
    </header>
    <body>
        <div class="card text-center">
            <h5 class="card-header bg-primary text-white"> 
            ${name}
            ${position} </h5>
            <div class="card-body">
              <li class="card-text"> ${Mid}</li>
              <li class="card-text"> ${Eid}</li>
              <li class="card-text"> ${Iid}</li>
              <li class="card-text"> ${emailID}</li>
              <li class="card-text"> ${emailId}</li>
              <li class="card-text"> ${emailid}</li>
              <li class="card-text"> ${officeNumber}</li>
              <li class="card-text"> ${github}</li>
              <li class="card-text"> ${school}</li>
            </div>
          </div>
    
        
    </body>
    </html>` ;
    };




start();