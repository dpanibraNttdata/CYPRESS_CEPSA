describe('STEP03 - 01-BUSCADOR - 08-BUSQUEDA_FILTRO_EAN', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('BUSQUEDA DE PRODUCTOS FILTRO - EAN', () => {
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

                    cy.get('#ean').type('8412847128434');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 1 productos');

                    cy.get('#ean').clear().type('8412847126249');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 1 productos');

                    cy.get('#ean').clear().type('8412847130239');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 1 productos');

                }
            });
        });
    });
});
