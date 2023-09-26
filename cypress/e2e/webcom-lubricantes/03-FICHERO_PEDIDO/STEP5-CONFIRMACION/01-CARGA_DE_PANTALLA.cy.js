import lubSupport from '../../../../support/lubricantes';

describe('STEP05 - 01-CARGA_DE_PANTALLA', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('VALIDACION CARGA PANTALLA CONFIRMACION DEL PEDIDO', () => {
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

                    cy.get('.b-common-form__actions__submit', {timeout: 20000}).click();
                    
                    cy.get('.container > .title', {timeout: 20000}).should('include.text', 'se ha realizado con éxito.');
                    cy.get('table > tbody > tr').then(($lis) => {
                        expect($lis).to.have.length(8);
                    });
                }
            });
        });
    });
});


