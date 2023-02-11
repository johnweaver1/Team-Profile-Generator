const Employee = require("./employee");

class Engineer extends Employee{
    constructor (github){
        super("name", "id", "email");
        this.github = github
    }
    getName (){
        return this.name
    } 

    getID(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return "engineer"
    }
}

module.exports = Engineer;