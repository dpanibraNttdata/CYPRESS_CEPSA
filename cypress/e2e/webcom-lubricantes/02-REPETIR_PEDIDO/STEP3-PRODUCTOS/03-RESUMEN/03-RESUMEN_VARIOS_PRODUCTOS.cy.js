import lubSupport from '../../../../../support/lubricantes';

describe('STEP03 - 03-RESUMEN - 03-RESUMEN_VARIOS_PRODUCTOS', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('VALIDACION RESUMEN DE VARIOS PRODUCTOS', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    lubSupport.passSelectRepeatOrder('5611504886');
                    lubSupport.passStep01RepeatOrder();

                    cy.get('.b-common-form__actions__submit').click({ multiple: true });
                    lubSupport.fillProduct(1, 10);
                    lubSupport.fillProduct(3, 20);
                    lubSupport.fillProduct(5, 30);

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (4)');
                    cy.get('.cta-accordion--title').click();

                    cy.get(':nth-child(2) > .b-search-results-table > .table-container > .results-table-wrapper > .table > tbody > tr ').then(($lis) => {
                        expect($lis).to.have.length(4);
                    });
                }
            });
        });
    });
});
