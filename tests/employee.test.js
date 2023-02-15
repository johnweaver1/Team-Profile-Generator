const Employee = require("../lib/Employee");

test("Verifies that new Employee instance is an object", () => {
  const test = new Employee();
  expect(typeof(test)).toBe("object");
});

test("Verifies that name is set via constructor argument", () => {
  const name = "Chase";
  const test = new Employee(name);
  expect(test.name).toBe(name);
});

test("Verifies that id is set via constructor argument", () => {
  const testValue = 12345;
  const test = new Employee("Chase", testValue);
  expect(test.id).toBe(testValue);
});

test("Verifies that email is set via constructor argument", () => {
  const testValue = "employee@email.com";
  const test = new Employee("Chase", 1, testValue);
  expect(test.email).toBe(testValue);
});

test("Verifies getName() returns name", () => {
  const testValue = "Chase";
  const test = new Employee(testValue);
  expect(test.getName()).toBe(testValue);
});

test("Verifies getId() returns id", () => {
  const testValue = 100;
  const test = new Employee("Chase", testValue);
  expect(test.getId()).toBe(testValue);
});

test("Verifies getEmail() returns email", () => {
  const testValue = "test@email.com";
  const test = new Employee("Chase", 1, testValue);
  expect(test.getEmail()).toBe(testValue);
});

test("Verifies getRole() returns \"Employee\"", () => {
  const testValue = "Employee";
  const test = new Employee("Chase", 1, "test@email.com");
  expect(test.getRole()).toBe(testValue);
});