
const selectors = require("../../selectors/login.json");


it("Should log in to the page", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  const login = require("../../fixtures/login.json");
  const password = require("../../fixtures/login.json");
  cy.login(login.login, login.password);
  cy.get(selectors.pageHeader).should("be.visible");
});

it("Should not log in to the page with wrong password", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  const login = require("../../fixtures/wrong_login.json");
  const password = require("../../fixtures/wrong_login.json");
  cy.login(login.login, login.password);
  cy.contains("Ошибка авторизации!").should("be.visible");
});
