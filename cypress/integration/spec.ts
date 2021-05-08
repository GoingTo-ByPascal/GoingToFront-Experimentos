it('loads examples', () => {
  cy.visit('/');
  cy.get('#dropdownMenu2').click();
  cy.get('#email').type('test@test.com');
  cy.get('#password').type('Test123');
  cy.get('#loginButton').click;
});
