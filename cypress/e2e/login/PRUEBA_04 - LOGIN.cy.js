describe('PRUEBA_04', () => {
    it('LOGIN', () => {
        cy.visit('https://premgmt-comercial.cepsacorp.es/es/login?from=particular', {
            onLoad: () => {
                cy.get('input#login-user').type('lubrimartin');
                cy.get('input#login-password').type('lubrimartin');
                cy.get(':nth-child(13) > .e-btn-primary').click();
                cy.url({ timeout: 100000 }).should('eq', 'https://premgmt-comercial.cepsacorp.es/es/areaprivada?from_login=x');
            }
        });
    });
});
