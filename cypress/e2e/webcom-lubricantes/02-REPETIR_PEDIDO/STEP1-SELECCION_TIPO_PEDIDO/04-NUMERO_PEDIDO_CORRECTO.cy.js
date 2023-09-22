describe('STEP01- 02-SELECCION_NUEVO_PEDIDO ', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('NUMERO DE PEDIDO VALIDO', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('.b-common-form__actions__submit').should('be.disabled');
                    cy.get('ul > :nth-child(2) > label').click();
                    cy.get('#order_number').type('5611504886');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.main_title', { timeout: 20000 }).should('have.text', 'Selecciona la dirección del pedido');
                }
            });
        });
    });
});
