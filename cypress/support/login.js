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
      cy.wait(1000);

      // LOGIN EN PREMGMT
      cy.get('input#login-user').type(email);
      cy.get('input#login-password').type(password);
      cy.get('button[type="submit"]').click();
  })
})