describe('PRUEBA_05', () => {
    it('PROBLEMAS CONTRASEÑA', () => {
        cy.visit('https://premgmt-comercial.cepsacorp.es/es/login?from=particular', {
            onLoad: () => {
                cy.get('.login__form--link').click();
                cy.get('.recover__form--title').should('include.text', 'Restablecer contraseña o recordar usuario');
            }
        });
    });
});
