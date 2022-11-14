describe("test post creation functionality", () => {
  const correctEmail = Cypress.env("EMAIL");
  const correctPassword = Cypress.env("PASSWORD");

  it("Logs user in and makes a post", () => {
    cy.visit("/");
    cy.loginWithE2E();
    cy.get("#loginEmail").type(correctEmail);
    cy.get("#loginPassword").type(correctPassword);
    cy.get("#loginForm button").contains("Login").click().wait(1000);

    cy.getLocalStorage("token").then((token) => {
      expect(token).to.not.be.null;
    });
    cy.get("a").contains("New Post").click();
    cy.wait(1000);
    cy.get("#postTitle").type("test5765");
    cy.get("#postTags").type("test5765");
    cy.get("#postMedia").type(
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    );
    cy.get("#postBody").type("test5765test5765test5765");
    cy.get("button").contains("Post").click();
    cy.url().should("contain", "postId=");
    cy.wait(1000);

    //Test is now completed so we delete the post we created
    cy.get("button").contains("Delete").click();
  });
  it("Logs user in and triest to make a post without title", () => {
    cy.visit("/");
    cy.loginWithE2E();
    cy.get("#loginEmail").type(correctEmail);
    cy.get("#loginPassword").type(correctPassword);
    cy.get("#loginForm button").contains("Login").click().wait(1000);

    cy.getLocalStorage("token").then((token) => {
      expect(token).to.not.be.null;
    });
    cy.get("a").contains("New Post").click();
    cy.wait(1000);
    cy.get("#postTags").type("test5765");
    cy.get("#postMedia").type(
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    );
    cy.get("#postBody").type("test5765test5765test5765");
    cy.get("button").contains("Post").click();
    cy.wait(1000);
    cy.url().should("not.contain", "postId=");
  });
});
