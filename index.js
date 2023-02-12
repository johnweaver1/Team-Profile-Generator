const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
teamArray = [];

function start() {
    function addMember() {
        inquirer.createPromptModule([
            {
                type: 'imput',
                name: 'name',
                message: 'Enter the employees name.'
            },
            {
                type: 'list',
                name: 'position',
                message: 'Enter position of employee',
                choices: ["Manager", "Engineer", ""]
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
                    
                }
            ])
        }
    }
}