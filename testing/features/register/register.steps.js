import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("El usuario rellena todos sus datos correctamente", () => {
  cy.visit("http://localhost:4200/");
  cy.get("#dropdownMenu2").click();
  cy.get("#activeRegister").click();
  cy.get("#email").type("registerEmail@email.com");
  cy.get("#name").type("Nombre");
  cy.get("#password").type("password123");
  cy.get("#repeatPassword").type("password123");
});
When("El usuario envía el formulario para completar el perfil", () => {
  cy.get("#register").click();
});
Then("El sistema envía una notificación “completado correctamente”", () => {
  cy.log("completado correctamente");
});

Given(
  "El usuario no llenó totalmente los datos requeridos por su perfil",
  () => {
    cy.visit("http://localhost:4200/");
    cy.get("#dropdownMenu2").click();
    cy.get("#activeRegister").click();
    cy.get("#email").click();
    cy.get("#name").type("Nombre");
    cy.get("#password").type("password123");
    cy.get("#repeatPassword").type("password123");
  }
);
Then(
  "El sistema envía una notificación “completado de manera incorrecta, revise los campos”",
  () => {
    cy.get(".error").should(
      "have.text",
      " Por favor ingrese el correo correctamente "
    );
  }
);
