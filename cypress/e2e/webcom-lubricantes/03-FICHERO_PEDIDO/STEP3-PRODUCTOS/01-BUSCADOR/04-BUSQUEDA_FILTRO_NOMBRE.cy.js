import lubSupport from '../../../../../support/lubricantes';

describe('STEP03 - 01-BUSCADOR - 04-BUSQUEDA_FILTRO_NOMBRE', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('BUSQUEDA DE PRODUCTOS FILTRO - NOMBRE', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    lubSupport.passSelectOrderType(config.newOrderType);
                    lubSupport.passStep01OrderAddress();

                    cy.get('#name').type('CEPSA GENUINE 5W40 B208LT');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 2 productos');

                    cy.get('#name').clear().type('CEPSA GENUINE 20W50 MAX B208 LT');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 1 productos');

                    cy.get('#name').clear().type('XTAR 5W30 C2 DPF C5x5L');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 1 productos');

                }
            });
        });
    });

});
