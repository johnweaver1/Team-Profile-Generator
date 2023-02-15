const Manager = require("../lib/Manager");

test("Verifies that office number is set via constructor argument", () => {
  const testValue = 100;
  const test = new Manager("Manager", 1, "test@email.com", testValue);
  expect(test.officeNumber).toBe(testValue);
});

test('Verifies getRole() returns "Manager"', () => {
  const testValue = "Manager";
  const test = new Manager("Manager", 1, "test@email.com", 100);
  expect(test.getRole()).toBe(testValue);
});

test("Verifies getOffice() returns office number", () => {
  const testValue = 100;
  const test = new Manager("Manager", 1, "test@email.com", testValue);
  expect(test.getOfficeNumber()).toBe(testValue);
});