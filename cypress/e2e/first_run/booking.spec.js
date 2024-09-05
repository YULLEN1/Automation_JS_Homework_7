const seats = require("../../fixtures/seats.json");
const selectors = require("../../selectors/booking.json")

it("Should be possible to book", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  const login = require("../../fixtures/login.json");
  const password = require("../../fixtures/login.json");
  cy.login(login.login, login.password);
  cy.get(selectors.movieTitle)
    .first()
    .should("contain", '"Сталкер(1979)"');
  cy.visit("qamid.tmweb.ru");
  cy.get(selectors.day).click();
  cy.get(selectors.movie).first().should("contain", '"Сталкер(1979)"');
  cy.get(selectors.movie).first().contains("13:00").click();
  seats.forEach((seat) => {
    cy.get(
      `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat}`
    ).click();
  });
  cy.get(selectors.button).click();
  cy.contains("Вы выбрали билеты:").should("be.visible");
});
