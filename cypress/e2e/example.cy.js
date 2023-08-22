const { baseUrl } = Cypress.env();
import { Example } from "../support/pages/example.page.js";

describe("login scenarios", () => {
  const examplePage = new Example();

  it("", () => {
    cy.visit(baseUrl);
  });
});
