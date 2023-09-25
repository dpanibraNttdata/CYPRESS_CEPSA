import lubSupport from '../../../../support/lubricantes';

describe('STEP04 - 01-CARGA_DE_PANTALLA_ERROR', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('VALIDACION CARGA PANTALLA DE RESUMEN DEL PEDIDO', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    lubSupport.passSelectFileOrder('');
                    lubSupport.passStep01RepeatOrder();

                    cy.get('.b-common-form__actions__submit').click();
                    lubSupport.fillProduct(1, 10);
                    lubSupport.fillProduct(5, 20);
                    lubSupport.fillProduct(6, 30);

                    cy.get('#summaryTable > .e-btn-primary').click();

                    cy.get('.b-common-form__actions__submit', { timeout: 20000 }).click().then((response) => {
                        cy.expect(response.status).to.equal(500);
                    });
                }
            });
        });
    });
});


