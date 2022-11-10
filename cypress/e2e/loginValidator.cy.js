const correctEmail = Cypress.env("EMAIL");
const correctPassword = Cypress.env("PASSWORD");

describe("test login validatoions", () => {
  it("Checks bad email", () => {
    cy.visit("/");
    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .wait(1000)
      .click()
      .wait(1000);
    cy.get("#loginEmail").type("FakeMail@gmail.com");
    cy.get("#loginPassword").type(correctPassword);
    cy.get("#loginForm button").contains("Login").click().wait(1000);

    cy.getLocalStorage("token").then((token) => {
      expect(token).to.be.null;
    });
  });

  it("checks bad password", () => {
    cy.visit("/");
    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .wait(1000)
      .click()
      .wait(1000);
    cy.get("#loginEmail").type(correctEmail);
    cy.get("#loginPassword").type("123");
    cy.get("#loginForm button").contains("Login").click().wait(1000);

    cy.getLocalStorage("token").then((token) => {
      expect(token).to.be.null;
    });
  });

  it("checks bad email & password", () => {
    cy.visit("/");
    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .wait(1000)
      .click()
      .wait(1000);
    cy.get("#loginEmail").type("FakeMail@gmail.com");
    cy.get("#loginPassword").type("123");
    cy.get("#loginForm button").contains("Login").click().wait(1000);

    cy.getLocalStorage("token").then((token) => {
      expect(token).to.be.null;
    });
  });
});
