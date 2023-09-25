import lubSupport from '../../../../support/lubricantes';

describe('STEP02- 03-FORMULARIO_VALIDO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('VALIDACION FORMULARIO DIRECCION DEL PEDIDO', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    lubSupport.passSelectFileOrder();

                    cy.get('#supply_date', {timeout: 20000}).type('26/09/2023');
                    cy.get('.b-common-form__actions__submit').should('not.be.disabled');
                }
            });
        });
    });
});
