describe("loginTest", () => {
  const email = Cypress.env("EMAIL");
  const password = Cypress.env("PASSWORD");
  it("loads", () => {
    cy.visit("/");
    cy.login(email, password);

    cy.getLocalStorage("token").then((token) => {
      expect(token.length).to.not.be.null;
    });
  });
});
