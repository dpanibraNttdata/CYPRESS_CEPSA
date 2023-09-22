import lubSupport from '../../../../../support/lubricantes';

describe('STEP03 - 02-TABLA - 01-CARGA_DE_TABLA', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('VALIDACION CARGA TABLA PRODUCTOS', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    lubSupport.passSelectOrderType(config.newOrderType);
                    lubSupport.passStep01OrderAddress();

                    cy.get('.b-common-form__actions__submit').click();

                    cy.get('.table > tbody > tr', { timeout: 20000 }).then(($lis) => {
                        expect($lis).to.have.length(777);
                    });
                }
            });
        });
    });
});
