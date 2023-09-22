import lubSupport from '../../../../support/lubricantes';

describe('STEP04 - 03-COMENTARIO_DEL_PEDIDO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('COMENTARIO DEL PEDIDO', () => {
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

                    cy.get('#summaryTable > .e-btn-primary').click();

                    cy.get('.cta-accordion--title', { timeout: 20000 }).click();

                    cy.get('#add-observation').type('Observacion del pedido simple, sin lorem ipsum');

                    cy.get('.b-common-form__actions__submit').should('not.be.disabled');
                }
            });
        });
    });
});


