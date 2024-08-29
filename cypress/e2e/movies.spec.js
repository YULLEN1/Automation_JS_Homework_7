const seats = require("../fixtures/seats.json");

it("Should show correct number of days", () => {
  cy.visit("qamid.tmweb.ru");
  cy.get(".page-nav__day").should("have.length", 7);
});

it("Should show 4 movie posters", () => {
  cy.visit("qamid.tmweb.ru");
  cy.get(".movie__poster").should("have.length", 4);
});

it("Should log in to the page", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  const login = require("../fixtures/login.json");
  const password = require("../fixtures/login.json");
  cy.login(login, password);
});

it("Should be possible to book", () => {
  cy.visit("qamid.tmweb.ru");
  cy.get("a.page-nav__day:nth-of-type(4)").click();
  cy.get(".movie").first().contains("13:00").click();
  const seats = require("../fixtures/seats.json");
  seats.forEach((seat) => {
    cy.get(
      `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
    ).click();
  });
  cy.get(".acceptin-button").click();
  cy.contains("Вы выбрали билеты:").should("be.visible");
});
