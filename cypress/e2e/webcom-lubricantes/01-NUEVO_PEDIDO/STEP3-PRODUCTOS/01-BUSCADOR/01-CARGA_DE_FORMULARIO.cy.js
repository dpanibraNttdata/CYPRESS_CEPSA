describe('STEP03 - 01-BUSCADOR - 01-CARGA_DE_FORMULARIO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('VALIDACION CARGA FORMULARIO PRODUCTOS', () => {
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

                    cy.get('.main_title').should('have.text', 'Selecciona los productos');
                    cy.get('.form__block > :nth-child(1) > .custom-select').should('have.value', '');
                    cy.get('#name').should('have.value', '');
                    cy.get(':nth-child(3) > .custom-select').should('have.value', '');
                    cy.get(':nth-child(4) > .custom-select').should('have.value', '');
                    cy.get('#sku').should('have.value', '');
                    cy.get('#ean').should('have.value', '');

                    cy.get('.b-common-form__actions__submit').should('not.be.disabled');
                }
            });
        });
    });
});
