import { login } from "../../src/js/api/index";
import { logout } from "../../src/js/api/index";
import { createPost } from "../../src/js/api/index";
import { deletePost } from "../../src/js/api/index";

Cypress.Commands.add("login", async (email, password) => {
  await login(email, password);
});

Cypress.Commands.add("logout", () => {
  logout();
});

Cypress.Commands.add("postMaker", async (title, body, media, tags) => {
  let post = await createPost(title, body, media, tags);
  return post;
});

Cypress.Commands.add("deletePost", async (id) => {
  await deletePost(id);
});

Cypress.Commands.add("loginWithE2E", () => {
  cy.get("#registerForm button")
    .contains("Login")
    .wait(2000)
    .click({ force: true })
    .wait(1000);
});
