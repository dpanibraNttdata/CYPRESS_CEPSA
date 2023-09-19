describe('STEP03 - 01-BUSCADOR - 07-BUSQUEDA_FILTRO_SKU', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('BUSQUEDA DE PRODUCTOS FILTRO - SKU', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('ul > :nth-child(1) > label').click();
                    cy.get('.b-common-form__actions__submit').click();

                    cy.get('#reference').type('123456');
                    cy.get('#supply_date').type('21/09/2023');

                    cy.get('input#delivery_address').click({ force: true });
                    cy.get('ul#ui-id-1').find('li').first().click();

                    cy.get('input#billing_address').click({ force: true });
                    cy.get('ul#ui-id-1').find('li').first().click();

                    cy.get('.b-common-form__actions__submit').click();

                    cy.get('#sku').type('CEPSA GENUINE 5W40 B208LT');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 2 productos');

                    cy.get('#sku').clear().type('CEPSA GENUINE 20W50 MAX B208 LT');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 1 productos');

                    cy.get('#sku').clear().type('XTAR 5W30 C2 DPF C5x5L');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 1 productos');

                }
            });
        });
    });
});
