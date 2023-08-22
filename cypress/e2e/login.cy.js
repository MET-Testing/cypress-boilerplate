const { baseUrl } = Cypress.env();
import { Login } from "../support/pages/login.page.js";

describe("login scenarios", () => {
  const loginPage = new Login();
  let usersData;

  before("use fixture", () => {
    cy.fixture("users").then((data) => {
      usersData = data;
    });
  });

  beforeEach("", () => {
    cy.visit(baseUrl);
    loginPage.clickNavbarLogin();
  });

  it("Login passes", () => {
    cy.get(loginPage.loginModal).should("be.visible", { timeout: 7000 });

    loginPage.clearLoginUsername();

    loginPage.typeUser(usersData.valid.user);
    loginPage.typePass(usersData.valid.pass);
    loginPage.clickLogin();

    cy.get(loginPage.loginModal).should("not.be.visible", { timeout: 7000 });
    cy.get(loginPage.nameUser).contains("Welcome");
  });
});
