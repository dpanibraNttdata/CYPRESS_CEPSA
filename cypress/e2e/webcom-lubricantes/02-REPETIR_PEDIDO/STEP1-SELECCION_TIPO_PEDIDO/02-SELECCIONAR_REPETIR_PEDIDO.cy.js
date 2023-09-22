describe('STEP01- 02-SELECCION_REPETIR_PEDIDO ', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('VALIDACION SELECCIONAR REPETIR PEDIDO', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('.b-common-form__actions__submit').should('be.disabled');
                    cy.get('ul > :nth-child(2) > label').click();
                    cy.get('ul > :nth-child(2) > input').should('be.checked').should('have.attr', 'value', 'OM_REPEAT_ORDER');
                    cy.get('.b-common-form__label-text').should('have.text', 'Nº Pedido');
                    cy.get('.b-common-form__actions__submit').should('be.disabled');
                }
            });
        });
    });
});
