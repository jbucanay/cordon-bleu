//end to end tests bryan

describe('First Test', () => {
    it('is working', () => {
        expect(true).to.equal(true);
    });
});

describe("Our app should open in localhost", () => {
    it("Visit the app", () => {
        cy.visit("/");
    });
});

describe("Routing to login page test", () => {
    it("Click sign in", () => {
        cy.visit("/login");
    });
});

describe("Routing to signup page test", () => {
    it("Click sign up", () => {
        cy.visit("/signup");
    });
});

describe("Routing to sign out page test ", () => {
    it("Click sign out in sidebar  ", () => {
        cy.visit("/signout#/");
    });
});



