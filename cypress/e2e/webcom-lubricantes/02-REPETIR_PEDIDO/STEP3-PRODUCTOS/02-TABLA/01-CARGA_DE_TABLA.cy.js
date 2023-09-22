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
                    lubSupport.passSelectRepeatOrder('5611504886');
                    lubSupport.passStep01RepeatOrder();

                    cy.get('.b-common-form__actions__submit').click({ multiple: true });
                    cy.get('.mb32 > .table-container > .results-table-wrapper > .table > tbody > tr', { timeout: 20000 }).then(($lis) => {
                        expect($lis).to.have.length(777);
                    });
                }
            });
        });
    });
});
