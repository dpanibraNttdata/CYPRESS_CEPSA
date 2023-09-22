import lubSupport from '../../../../../support/lubricantes';

describe('STEP03 - 03-RESUMEN - 02-RESUMEN_DE_UN_PRODUCTO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('VALIDACION RESUMEN DE UN PRODUCTO', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    lubSupport.passSelectRepeatOrder('5611504886');
                    lubSupport.passStep01RepeatOrder();

                    cy.get('.b-common-form__actions__submit').click({ multiple: true });
                    lubSupport.fillProduct(1, 10);

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (2)');
                    cy.get('.cta-accordion--title').click();

                    cy.get(':nth-child(2) > .b-search-results-table > .table-container > .results-table-wrapper > .table > tbody > tr ').then(($lis) => {
                        expect($lis).to.have.length(1);
                    });
                }
            });
        });
    });
});
