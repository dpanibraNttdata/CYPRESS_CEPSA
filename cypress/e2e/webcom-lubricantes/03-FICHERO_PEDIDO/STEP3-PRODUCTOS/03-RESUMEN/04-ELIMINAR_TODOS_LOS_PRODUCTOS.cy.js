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
                    lubSupport.passSelectFileOrder('');
                    lubSupport.passStep01RepeatOrder();

                    cy.get('.b-common-form__actions__submit').click({ multiple: true });
                    lubSupport.fillProduct(1, 10);
                    lubSupport.fillProduct(5, 20);
                    lubSupport.fillProduct(6, 30);

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (6)');
                    cy.get('.cta-accordion__wrapper > .hide-on-mobile').click();
                    cy.get('.modal__footer').click();

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (0)');
                }
            });
        });
    });
});
