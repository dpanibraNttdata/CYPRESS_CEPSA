describe('STEP03 - 01-BUSCADOR - 05-BUSQUEDA_FILTRO_CATEGORIA', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('BUSQUEDA DE PRODUCTOS FILTRO - CATEGORÍA', () => {
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

                    // value="B" ->BASES
                    // value="E" ->ENERGETICOS
                    // value="G" ->GRASAS
                    // value="L" ->TOTAL LUBRICANTES
                    // value="P" ->PARAFINAS
                    // value="Q" ->P.Q.A.
                    // value="X" ->VARIOS
                    // value="Z" ->ENVASES EMBALAJES

                    cy.get(':nth-child(3) > .custom-select').select('BASES');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 0 productos');

                    cy.get(':nth-child(3) > .custom-select').select('ENERGETICOS');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 0 productos');

                    cy.get(':nth-child(3) > .custom-select').select('GRASAS');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 47 productos');

                    cy.get(':nth-child(3) > .custom-select').select('TOTAL LUBRICANTES');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 671 productos');

                    cy.get(':nth-child(3) > .custom-select').select('PARAFINAS');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 0 productos');

                    cy.get(':nth-child(3) > .custom-select').select('P.Q.A.');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 59 productos');

                    cy.get(':nth-child(3) > .custom-select').select('VARIOS');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 0 productos');

                    cy.get(':nth-child(3) > .custom-select').select('ENVASES EMBALAJES');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 0 productos');
                }
            });
        });
    });
});
