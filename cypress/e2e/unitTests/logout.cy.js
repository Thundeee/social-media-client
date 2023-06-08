describe("logoutTest", () => {
  const email = Cypress.env("EMAIL");
  const password = Cypress.env("PASSWORD");
  it("Checks if we can logout", () => {
    cy.visit("/");
    cy.login(email, password);

    cy.logout();

    cy.getLocalStorage("token").then((token) => {
      expect(token).to.be.null;
    });
  });
});
