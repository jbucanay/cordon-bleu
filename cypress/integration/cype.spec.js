describe("cordon-bleu should open in localhost", () => {
  beforeEach(function() {
    cy.log("testing commencing");
  });
  it("visit the app and type", () => {
    cy.visit("/");

    cy.get("input").type("500 ervay street");
    cy.get("#google-places-autocomplete-suggestion--0").click();
  });
  describe("should see article container", () => {
    it("article should have food types", () => {
      cy.get("article section:first-child").contains("American");
    });

    describe("should click on chickfila", () => {
      it("should visit chick className", () => {
        cy.get(".bottom .chick").click();
        cy.scrollTo(0, 1000);
      });
    });

    describe("should sign in ", () => {
      it("should go to sign in page", () => {
        cy.get(".nav-sign-in-words").click();
      });
      it("clicks google firebase", () => {
        cy.get(".firebaseui-idp-list li:nth-last-of-type(3)").click();
      });
    });
  });
});

// units

describe("click home button", () => {
  after(function() {
    cy.log("testing complete");
  });
  it("should visit home page and click signup", () => {
    cy.visit("/#/login");
    cy.get(".nav-signup-button").click();
  });
});
