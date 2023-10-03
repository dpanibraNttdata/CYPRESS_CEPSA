describe('02-TABLA - 03-DESPLIEGUE_DETALLE', () => {
    it('Validación despliegue de las filas de la tabla de resultados', () => {
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

                    cy.get(':nth-child(5) > .ar > .js-table-collapse > .s').click();
                    cy.get(':nth-child(9) > .ar > .js-table-collapse > .s').click();
                    cy.get(':nth-child(15) > .ar > .js-table-collapse > .s').click();

                    cy.get(':nth-child(6) > .link-td > .link').should('exist');
                    cy.get(':nth-child(10) > .link-td > .link').should('exist');
                    cy.get(':nth-child(16) > .link-td > .link').should('exist');
                }
            });
        });
    });
});
