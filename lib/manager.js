const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email, officeNumber)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber (){
        return this.officeNumber
    };
    
    getRole(){
        return 'Manager'
    };
    
    };

module.exports = Manager;