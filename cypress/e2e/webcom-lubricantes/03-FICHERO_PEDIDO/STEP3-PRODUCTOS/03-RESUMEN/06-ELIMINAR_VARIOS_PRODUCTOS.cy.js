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
                    lubSupport.passSelectOrderType(config.newOrderType);
                    lubSupport.passStep01OrderAddress();

                    cy.get('.b-common-form__actions__submit').click();
                    lubSupport.fillProduct(1, 10);
                    lubSupport.fillProduct(3, 20);
                    lubSupport.fillProduct(5, 30);

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (3)');
                    cy.get('.cta-accordion--title').click();

                    cy.get('tbody > :nth-child(3) > :nth-child(6) > a > .s').click();
                    cy.get('.modal__footer').click();

                    cy.get('tbody > :nth-child(1) > :nth-child(6) > a > .s').click();
                    cy.get('.modal__footer').click();

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (1)');

                    cy.get(`:nth-child(${1}) > :nth-child(5) > .d-flex > #order-amount`).should('have.value', '');
                    cy.get(`:nth-child(${5}) > :nth-child(5) > .d-flex > #order-amount`).should('have.value', '');
                }
            });
        });
    });
});
