describe('PRUEBA_03', () => {
    it('LOGIN INCORRECTO', () => {
        cy.visit('https://premgmt-comercial.cepsacorp.es/es/login?from=particular', {
            onLoad: () => {
                cy.get('input#login-user').type('failUser');
                cy.get(':nth-child(13) > .e-btn-primary').click();
                cy.get('.login > .login__error--title').should('include.text', 'Lo sentimos, algunos de los datos introducidos no son correctos.');
            }
        });
    });
});
