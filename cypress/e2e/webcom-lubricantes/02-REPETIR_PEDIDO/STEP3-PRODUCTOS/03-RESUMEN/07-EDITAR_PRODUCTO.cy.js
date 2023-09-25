import lubSupport from '../../../../../support/lubricantes';

describe('STEP03 - 03-RESUMEN - 07-EDITAR_PRODUCTO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('EDITAR PRODUCTO', () => {
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
                    cy.get('.cta-accordion__content--panel > section > section > div > .results-table-wrapper > table > tbody > :nth-child(1) >  :nth-child(7) > a > .s').click();
                    cy.get('.modal__footer > .filled').click();
                    cy.get('#order-amount').clear().type(120);
                    cy.get(':nth-child(7) > a').click();
                    cy.get(':nth-child(5) > p').first().should('have.text', '120');
                }
            });
        });
    });
});
