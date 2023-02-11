const Employee = require("./employee");

class Manager extends Employee{
    constructor(officeNumber){
        super("Chase", 3, "jweaver.rodriguez@gmail.com")
        this.officeNumber = officeNumber;
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
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return "manager"
    }
}

module.exports = Manager;