import lubSupport from '../../../../../support/lubricantes';

describe('STEP03 - 02-TABLA - 04-LLENAR_TABLA_COMPLEJO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('LLENAR TABLA PRODUCTOS - COMPLEJO', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    lubSupport.passSelectRepeatOrder('5611504886');
                    lubSupport.passStep01RepeatOrder();

                    cy.get('.b-common-form__actions__submit').click({ multiple: true });

                    cy.get(':nth-child(1) > :nth-child(5) > .d-flex > #order-amount', { timeout: 20000 }).type(10);
                    cy.get('tbody > :nth-child(1) > :nth-child(7) > a').first().click({ multiple: true });

                    cy.get(':nth-child(2) > :nth-child(5) > .d-flex > #order-amount').type(5);
                    cy.get('tbody > :nth-child(2) > :nth-child(7) > a').first().click({ multiple: true });

                    cy.get(':nth-child(3) > :nth-child(5) > .d-flex > #order-amount').type(15);
                    cy.get('tbody > :nth-child(3) > :nth-child(7) > a').first().click({ multiple: true });

                    cy.get(':nth-child(4) > :nth-child(5) > .d-flex > #order-amount').type(20);
                    cy.get('tbody > :nth-child(4) > :nth-child(7) > a').first().click({ multiple: true });

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (5)');
                }
            });
        });
    });
});
