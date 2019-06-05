describe("cordon-bleu should open in localhost", () => {
  it("visit the app and type", () => {
    cy.visit("/");

    cy.get("input").type("500 ervay street");
    cy.get("#google-places-autocomplete-suggestion--0").click();
    cy.contains("Sign Up").should("be.visible");
  });
});
