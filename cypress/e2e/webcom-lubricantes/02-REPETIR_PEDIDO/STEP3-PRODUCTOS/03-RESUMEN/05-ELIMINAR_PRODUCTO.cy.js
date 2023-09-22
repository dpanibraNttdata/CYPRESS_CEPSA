import lubSupport from '../../../../../support/lubricantes';

describe('STEP03 - 03-RESUMEN - 05-ELIMINAR_PRODUCTO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });
    it('ELIMINAR PRODUCTO', () => {
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

                    cy.get('.cta-accordion__content--panel > section > section > div > .results-table-wrapper > table > tbody > :nth-child(1) >  :nth-child(6) > a > .s').click();
                    cy.get('.modal__footer').click();

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (1)');
                }
            });
        });
    });
});
