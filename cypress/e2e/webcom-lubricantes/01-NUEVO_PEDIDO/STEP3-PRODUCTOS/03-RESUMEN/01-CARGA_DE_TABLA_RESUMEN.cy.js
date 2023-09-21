import lubSupport from '../../../../../support/lubricantes';

describe('STEP03 - 03-RESUMEN - 01-CARGA_DE_TABLA_RESUMEN', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('VALIDACION CARGA TABLA RESUMEN', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    lubSupport.passSelectOrderType(config.newOrderType);
                    lubSupport.passStep01OrderAddress();

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (0)');
                }
            });
        });
    });
});
