const selectors = require("../../selectors/movies.json");

it("Should show correct number of days", () => {
  cy.visit("qamid.tmweb.ru");
  cy.get(selectors.days).should("have.length", 7);
});

it("Should show 4 movie posters", () => {
  cy.visit("qamid.tmweb.ru");
  cy.get(selectors.poster).should("have.length", 4);
});



