describe('02-TABLA - 01-SELECCION_FACTURAS', () => {
    it('Validación de la selección de facturas en la tabla de resultados', () => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('webcomercial19', 'prueba1234');

        // CONFIGURACIONES DEL WIDGET
        cy.fixture('misfacturas').then((config) => {

            // ACCESSO AL WIDGET - WEBCOM-MISFACTURAS
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');
                    cy.get('#from-date').type('2022-02-22');
                    cy.get('#to-date').type('2022-05-20');
                    cy.get("#vext-gen1081 form > div.form-group > input").click();

                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');
                    cy.get('thead > tr > :nth-child(1)').click();
                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (75)');

                    cy.get(':nth-child(9) > :nth-child(1) > .custom-checkbox > label').click();
                    cy.get(':nth-child(11) > :nth-child(1) > .custom-checkbox > label').click();
                    cy.get(':nth-child(13) > :nth-child(1) > .custom-checkbox > label').click();
                    cy.get(':nth-child(15) > :nth-child(1) > .custom-checkbox > label').click();
                    cy.get(':nth-child(17) > :nth-child(1) > .custom-checkbox > label').click();
                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (70)');

                    cy.get('thead > tr > :nth-child(1)').click();
                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (75)');

                    cy.get('thead > tr > :nth-child(1)').click();
                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');

                    cy.get(':nth-child(9) > :nth-child(1) > .custom-checkbox > label').click();
                    cy.get(':nth-child(11) > :nth-child(1) > .custom-checkbox > label').click();
                    cy.get(':nth-child(13) > :nth-child(1) > .custom-checkbox > label').click();
                    cy.get(':nth-child(15) > :nth-child(1) > .custom-checkbox > label').click();
                    cy.get(':nth-child(17) > :nth-child(1) > .custom-checkbox > label').click();
                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (5)');
                }
            });
        });
    });
});
