describe("test logout functionality", () => {
  const correctEmail = Cypress.env("EMAIL");
  const correctPassword = Cypress.env("PASSWORD");

  it("Logs user in and clicks logout", () => {
    cy.visit("/");
    cy.loginWithE2E();
    cy.get("#loginEmail").type(correctEmail);
    cy.get("#loginPassword").type(correctPassword);
    cy.get("#loginForm button").contains("Login").click().wait(1000);

    cy.getLocalStorage("token").then((token) => {
      expect(token).to.not.be.null;

      cy.get("button").contains("Logout").click();
      cy.wait(1000);
    });
    cy.getLocalStorage("token").then((token) => {
      expect(token).to.be.null;
    });
  });
});
