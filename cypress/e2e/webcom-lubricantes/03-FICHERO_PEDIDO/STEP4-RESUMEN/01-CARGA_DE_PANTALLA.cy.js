import lubSupport from '../../../../support/lubricantes';

describe('STEP04 - 01-CARGA_DE_PANTALLA', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('VALIDACION CARGA PANTALLA DE RESUMEN DEL PEDIDO', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    lubSupport.passSelectOrderType(config.newOrderType);
                    lubSupport.passStep01OrderAddress();

                    cy.get('.b-common-form__actions__submit').click();
                    lubSupport.fillProduct(1, 10);
                    lubSupport.fillProduct(3, 20);
                    lubSupport.fillProduct(5, 30);

                    cy.get('#summaryTable > .e-btn-primary').click();

                    cy.get('.main_subtitle', { timeout: 20000 }).should('have.text', 'Por favor, revisa que todos los datos sean correctos');
                }
            });
        });
    });
});


