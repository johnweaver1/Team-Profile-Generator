const Intern = require("../lib/Intern");

test("Verifies that school is set via constructor argument", () => {
  const testValue = "UT of A";
  const test = new Intern("Chase", 1, "test@email.com", testValue);
  expect(test.school).toBe(testValue);
});

test("Verifies getRole() returns \"Intern\"", () => {
  const testValue = "Intern";
  const test = new Intern("Chase", 1, "test@email.com", "UT Austin");
  expect(test.getRole()).toBe(testValue);
});

test("Verifies getSchool() returns school", () => {
  const testValue = "UT Austin";
  const test = new Intern("Chase", 1, "test@email.com", testValue);
  expect(test.getSchool()).toBe(testValue);
});