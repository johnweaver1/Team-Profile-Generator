
const Manager = require('../lib/manager');
const testManager = new Manager ("Chase", 4, "jweaver.rodriguez@gmail.com", 4);

test ("testing the getName function", () => {
    expect(testManager.getName()).toBe("Chase");
}) 