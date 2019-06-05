// derek tests

describe("Initial Test", () => {
  it("Go to the app", () => {
    cy.visit("/");
  });
});

describe("Login Page Test", () => {
  it("Go to the login page", () => {
    cy.visit("/login");
  });
});

describe("Restaurants Page Test", () => {
  it("Go to the restaurants page", () => {
    cy.visit("/restaurants");
  });
});

describe("Signup Page Test", () => {
  it("Go to the signup page", () => {
    cy.visit("/signup");
  });
});

describe("Test", () => {
  it("Go to the app", () => {
    cy.visit("google.com");
  });
});
