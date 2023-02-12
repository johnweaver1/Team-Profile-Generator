const Engineer = require('../lib/engineer');
const testEngineer = new Engineer ("Chase", 2, "jweaver.rodriguez@gmail.com", "johnweaver1");

test ("testing the getName function", () => {
    expect(testEngineer.getName()).toBe("Chase");
}) ;