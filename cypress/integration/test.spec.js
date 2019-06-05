describe("First Test", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });
});

describe("Second Test", () => {
  it("Visit the app", () => {
    cy.visit("/");
  });
});

describe("Second Test", () => {
  it("Click sign in", () => {
    cy.visit("/login");
  });
});

describe("Second Test", () => {
  it("Click sign up", () => {
    cy.visit("/signup");
  });
});

describe("Second Test", () => {
  it("Click sign out in sidebar  ", () => {
    cy.visit("/signout#/");
  });
});
//end to end tests bryan
