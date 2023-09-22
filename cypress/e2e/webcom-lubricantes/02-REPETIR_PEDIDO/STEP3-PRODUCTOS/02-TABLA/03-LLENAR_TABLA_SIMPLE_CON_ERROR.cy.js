import lubSupport from '../../../../../support/lubricantes';

describe('STEP03 - 02-TABLA - 03-SIMPLE_CON_ERROR', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('LLENAR TABLA PRODUCTOS - SIMPLE CON ERROR', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    lubSupport.passSelectRepeatOrder('5611504886');
                    lubSupport.passStep01RepeatOrder();

                    cy.get('.b-common-form__actions__submit').click({ multiple: true });

                    cy.get(':nth-child(1) > :nth-child(5) > .d-flex > #order-amount', { timeout: 20000 }).type('null');
                    cy.get('tbody > :nth-child(1) > :nth-child(7) > a').should('have.text', 'Añadir');
                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (1)');
                }
            });
        });
    });

});
