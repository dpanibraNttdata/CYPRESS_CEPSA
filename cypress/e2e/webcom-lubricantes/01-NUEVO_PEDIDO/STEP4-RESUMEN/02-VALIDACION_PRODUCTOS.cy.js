import lubSupport from '../../../../support/lubricantes';

describe('STEP04 - 02-VALIDACION_PRODUCTOS', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('VALIDACION PRODUCTOS DEL PEDIDO', () => {
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

                    cy.get('tbody > tr', { timeout: 20000 }).then(($lis) => {
                        expect($lis).to.have.length(2);
                    });
                }
            });
        });
    });
});


