import lubSupport from '../../../../../support/lubricantes';

describe('STEP03 - 03-RESUMEN - 06-ELIMINAR_VARIOS_PRODUCTOS', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('ELIMINAR VARIOS PRODUCTOS', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    lubSupport.passSelectFileOrder('');
                    lubSupport.passStep01RepeatOrder();

                    cy.get('.b-common-form__actions__submit').click({ multiple: true });
                    lubSupport.fillProduct(1, 10);
                    lubSupport.fillProduct(5, 20);
                    lubSupport.fillProduct(6, 30);

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (6)');
                    cy.get('.cta-accordion--title').click();

                    cy.get('.cta-accordion__content--panel > section > section > div > .results-table-wrapper > table > tbody > :nth-child(3) >  :nth-child(6) > a > .s').click();
                    cy.get('.modal__footer').click();

                    cy.get('.cta-accordion__content--panel > section > section > div > .results-table-wrapper > table > tbody > :nth-child(3) >  :nth-child(6) > a > .s').click();
                    cy.get('.modal__footer').click();

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (4)');

                    cy.get(`:nth-child(${1}) > :nth-child(5) > .d-flex > #order-amount`).should('have.value', '');
                    cy.get(`:nth-child(${4}) > :nth-child(5) > .d-flex > #order-amount`).should('have.value', '');
                }
            });
        });
    });
});
