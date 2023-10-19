/**
 * Realiza inicio de sesión en el sitio web de PREMGMT
 * y guarda la sessión.
 *
 * @param {string} email    Correo electrónico del usuario para iniciar sesión.
 * @param {string} password Contraseña del usuario para iniciar sesión.
 */

Cypress.Commands.add('loginPREMGMT', (email, password) => {
  cy.session("LOGIN PREMGMT", () => {
    cy.visit('https://premgmt-comercial.cepsacorp.es/es/login?from=particular');
    // Inicia sesión con las credenciales proporcionadas.
    cy.get('#login-user', {timeout: 10000}).type(email);
    cy.get('#login-password').type(password);
    cy.wait(1000);
    cy.get('button[type="submit"]').click();
  })
});