describe('STEP02 - 01-CARGA_DE_FORMULARIO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

it('VALIDACION CARGA FORMULARIO DIRECCION DEL PEDIDO', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('ul > :nth-child(1) > label').click();
                    cy.get('.b-common-form__actions__submit').click();

                    cy.get('#reference').should('have.value', '');
                    cy.get('#supply_date').should('have.value', '');
                    cy.get('input#delivery_address').should('have.value', '');
                    cy.get('input#billing_address').should('have.value', '');
                    cy.get('.b-common-form__actions__submit').should('be.disabled');
                }
            });
        });
    });
});
