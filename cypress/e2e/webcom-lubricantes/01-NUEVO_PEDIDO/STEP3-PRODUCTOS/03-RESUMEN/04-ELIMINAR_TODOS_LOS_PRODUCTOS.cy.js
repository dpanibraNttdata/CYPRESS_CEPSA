import lubSupport from '../../../../../support/lubricantes';

describe('STEP03 - 03-RESUMEN - 04-ELIMINAR_TODOS_LOS_PRODUCTOS', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('ELIMINAR TODOS LOS PRODUCTOS', () => {
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
                    cy.get('.cta-accordion__wrapper > .hide-on-mobile').click();
                    cy.get('.modal__footer').click();

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (0)');
                }
            });
        });
    });
});
