import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("un usuario que digitó su usuario y contraseña correctamente", () => {
  cy.visit("http://localhost:4200/");
  cy.get("#dropdownMenu2").click();
  cy.get("#email").type("correoTest@test.com");
  cy.get("#password").type("test123");
});
When('da click sobre el botón "Ingresar"', () => {
  cy.get("#loginButton").click();
});
Then(
  "se le mostrará la pantalla inicial de lugares atrayentes para el usuario",
  () => {
    cy.visit("/explore");
  }
);

Given("un usuario que digitó su usuario y contraseña incorrectamente", () => {
  cy.visit("http://localhost:4200/");
  cy.get("#dropdownMenu2").click();
  cy.get("#email").type("correoTest@test.com");
  cy.get("#password").type("test123");
});

Then("se le muestra un mensaje emergente", () => {
  cy.log("Usuario o contraseña incorrecto");
});
