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
                    lubSupport.passSelectOrderType(config.newOrderType);
                    lubSupport.passStep01OrderAddress();

                    cy.get('.b-common-form__actions__submit').click();
                    lubSupport.fillProduct(1, 10);

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (1)');
                    cy.get('.cta-accordion--title').click();

                    cy.get('tr > :nth-child(6) > a > .s').click();
                    cy.get('.modal__footer').click();

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (0)');
                }
            });
        });
    });
});
