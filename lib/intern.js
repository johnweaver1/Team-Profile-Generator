const Employee = require("./employee");

class Intern extends Employee{
    constructor(school, name, id, email){
        super(name, id, email)
        this.school = school
    }

    getName(){
        return this.name
    }
    getID(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return "intern"
    }
}

module.exports = Intern;