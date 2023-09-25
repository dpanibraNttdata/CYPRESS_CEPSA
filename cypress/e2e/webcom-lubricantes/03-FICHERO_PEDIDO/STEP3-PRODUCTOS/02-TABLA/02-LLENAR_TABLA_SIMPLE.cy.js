import lubSupport from '../../../../../support/lubricantes';

describe('STEP03 - 02-TABLA - 02-LLENAR TABLA PRODUCTOS - SIMPLE', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('LLENAR TABLA PRODUCTOS - SIMPLE', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    lubSupport.passSelectFileOrder('');
                    lubSupport.passStep01RepeatOrder();

                    cy.get('.b-common-form__actions__submit').click({ multiple: true });

                    cy.get(':nth-child(5) > :nth-child(5) > .d-flex > #order-amount', { timeout: 20000 }).type(10);
                    cy.get('tbody > :nth-child(5) > :nth-child(7) > a').first().click({ multiple: true });

                    cy.get('tbody > :nth-child(5) > :nth-child(7) > p').first().should('have.text', 'Añadido');

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (4)');
                }
            });
        });
    });
});
