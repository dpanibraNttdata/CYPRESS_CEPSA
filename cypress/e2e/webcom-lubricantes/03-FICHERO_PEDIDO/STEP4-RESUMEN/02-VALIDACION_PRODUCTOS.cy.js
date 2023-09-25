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
                    lubSupport.passSelectFileOrder('');
                    lubSupport.passStep01RepeatOrder();

                    cy.get('.b-common-form__actions__submit').click();
                    lubSupport.fillProduct(1, 10);
                    lubSupport.fillProduct(5, 20);
                    lubSupport.fillProduct(6, 30);

                    cy.get('#summaryTable > .e-btn-primary').click();
                    cy.get('.main_subtitle', { timeout: 20000 }).should('have.text', 'Por favor, revisa que todos los datos sean correctos');
                    cy.get('tbody > tr').then(($lis) => {
                        expect($lis).to.have.length(8);
                    });
                }
            });
        });
    });
});


