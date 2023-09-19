describe('STEP01- 02-SELECCION_NUEVO_PEDIDO ', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('VALIDACION SELECCIONAR NUEVO PEDIDO', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('.b-common-form__actions__submit').should('be.disabled');
                    cy.get('ul > :nth-child(1) > label').click();
                    cy.get('ul > :nth-child(1) > input').should('be.checked').should('have.attr', 'value', 'OM_NEW_ORDER')
                    cy.get('.b-common-form__actions__submit').should('not.be.disabled');
                }
            });
        });
    });

});
