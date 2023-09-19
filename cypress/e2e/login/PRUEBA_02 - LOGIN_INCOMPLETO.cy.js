describe('PRUEBA_02', () => {
    it('LOGIN CON VALORES INCOMPLETOS', () => {
        cy.visit('https://premgmt-comercial.cepsacorp.es/es/login?from=particular', {
            onLoad: () => {
                cy.get(':nth-child(13) > .e-btn-primary').click();
                cy.get('.login__form--title').should('include.text', '¡Bienvenido a Cepsa!');
            },
        });
    });
});
