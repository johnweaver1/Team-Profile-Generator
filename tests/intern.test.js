const Intern = require('../lib/intern');
const testIntern = new Intern ("Chase", 1, "jweaver.rodriguez@gmail.com", "school");

test ("testing the getName function", () => {
    expect(testIntern.getName()).toBe("Chase");
}) ;