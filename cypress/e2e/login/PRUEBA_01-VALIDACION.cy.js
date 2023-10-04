describe('PRUEBA_01', () => {
    it('VALIDAR PANTALLA LOGIN', () => {
        cy.visit('https://premgmt-comercial.cepsacorp.es/es/login?from=particular', {
            onLoad: () => {
                cy.get('.login__form--title').should('include.text', '¡Bienvenido a Cepsa!');
            }
        });
    });
});
