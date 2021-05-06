import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("El usuario escoge un lugar", () => {
  cy.visit("http://localhost:4200");
  cy.get("#search").click();
  cy.wait(2000);
});
When("Hace click en el lugar escogido", () => {
  cy.get("#Peru").click();
  cy.get("#viewMoreTips").click();
});
Then("El sistema despliega los tips del lugar escogido", () => {
  cy.get("h1").contains("Tips");
});

Then("El sistema despliega las promociones del lugar escogido", () => {
  cy.get("h1").contains("Promos");
});

Then("El sistema despliega las reviews del lugar escogido", () => {
  cy.get("h1").contains("Reviews");
});
