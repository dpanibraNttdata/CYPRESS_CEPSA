describe('STEP01- 03-NUMERO_PEDIDO_INCORRECTO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('NUMERO DE PEDIDO INCORRECTO', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('.b-common-form__actions__submit').should('be.disabled');
                    cy.get('ul > :nth-child(2) > label').click();
                    cy.get('#order_number').type('123asdf');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.help-block', { timeout: 20000 }).should('have.text', 'Número de pedido incorrecto');
                }
            });
        });
    });
});
