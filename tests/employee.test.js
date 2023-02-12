const Employee = require('../lib/employee');
const testEmployee = new Employee ("Chase", 3, "jweaver.rodriguez@gmail.com");

test("testing the getName function", () => {
    expect(testEmployee.getName()).toBe("Chase");
})