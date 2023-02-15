const Engineer = require("../lib/Engineer");

test("Verifies that GitHub is set via constructor argument", () => {
  const testValue = "GitHubUser";
  const test = new Engineer("Weaver", 1, "test@email.com", testValue);
  expect(test.github).toBe(testValue);
});

test("Verifies getRole() returns \"Engineer\"", () => {
  const testValue = "Engineer";
  const test = new Engineer("Weaver", 1, "test@email.com", "GitHubUser");
  expect(test.getRole()).toBe(testValue);
});

test("Verifies getGithub() returns GitHub username", () => {
  const testValue = "GitHubUser";
  const test = new Engineer("Weaver", 1, "test@email.com", testValue);
  expect(test.getGithub()).toBe(testValue);
});