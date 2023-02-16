const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const generatemarkdown = require('./src/generatemarkdown.js')
teamArray = [];
//creates manager profile
const addManager = ()=>{
    return inquirer
    .prompt([
     {
     type: 'input',
     name: 'name',
     message: 'Who is the team manager?'
     },
     {
     type: 'input',
     name: 'id',
     message: 'What is your ID number?',    
     },
     {
     type: 'input',
     name: 'email',
     message: 'What is your email?'
     },
     {
     type: 'input',
     name: 'officeNumber',
     message: 'What is your office number?',
     },
     ])
     .then((managerInput) =>{
         const { name, id, email, officeNumber } = managerInput
         
         const manager = new Manager (name, id, email, officeNumber )
        
         teamArray.push(manager)
 })}
 
 //add employee function
 const addEmployee = ()=> {
     console.log("Add Employee Profile")
     return inquirer
     .prompt([
     {
     type: "list",
     name: "role",
     message: "Choose your employee's role:",
     choices: ['Intern','Engineer']
     },
     {
     type: "input",
     name: 'name',
     message: "Enter your employee's name:"
     },
     {
     type:'input',
     name:'id',
     message: "Enter employee ID:"
     },
     {
     type: 'input',
     name: "email",
     message: "Enter employee email:"
     },
     {
     type: 'input',
     when: (input) => input.role === "Intern",
     name: 'school',
     message: "Enter Intern's School:"
     },
     {
     type: 'input',
     when: (input) => input.role === "Engineer",
     name: 'github',
     message: "Enter Engineer's Github:" 
     },
     {
     type: 'confirm',
     name: "addAnotherEmployee",
     message: "Would you like to add another Employee?",
     default: false
     },
 ])
 .then(employeeData => {
 
     //creates employees based on the user selection
     let {role, name, id, email, school, github, addAnotherEmployee } = employeeData
     let employee;
     if (role === "Intern"){
     employee = new Intern (name, id, email, school)
     }
     if(role === "Engineer"){
     employee = new Engineer (name, id, email, github);
     }
     teamArray.push(employee);
     if(addAnotherEmployee){
     return addEmployee(teamArray);
     }
     else{
         return teamArray;
     }
 })};
 //Function to create manager profile then add other employees.
 addManager()
     .then(addEmployee)
     .then((teamArray) =>{
     console.log(teamArray)
         const mark = generatemarkdown(teamArray)
         fs.writeFile("./dist/index.html", mark, err =>{
             if(err){
                 console.log('Error', err)
             }
             else{
                 console.log('Generating HTML')
             }
         })
     
     
     });