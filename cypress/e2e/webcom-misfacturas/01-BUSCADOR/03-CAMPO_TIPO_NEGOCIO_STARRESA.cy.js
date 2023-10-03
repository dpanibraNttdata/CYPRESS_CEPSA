describe('01-BUSCADOR - 03-CAMPO_TIPO_NEGOCIO_STARRESA', () => {
    it('Buscar por campo Tipo de Negocio - Starressa', () => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('webcomercial19', 'prueba1234');

        // CONFIGURACIONES DEL WIDGET
        cy.fixture('misfacturas').then((config) => {

            // ACCESSO AL WIDGET - WEBCOM-MISFACTURAS
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');

                    cy.get("#tipo-negocio").select("STARRESSA");
                    cy.get('#tipo-dispositivo', { timeout: 2000 }).select("StarRessa Direct");
                    cy.get("#vext-gen1081 form > div.form-group > input").click();
                    cy.get("section:nth-of-type(2) > section h2", { timeout: 20000 }).should('have.text', 'Lo sentimos, no hay resultados');

                    cy.get('#contrato').select("9033873000000");
                    cy.get("#vext-gen1081 form > div.form-group > input").click();
                    cy.get("section:nth-of-type(2) > section h2", { timeout: 20000 }).should('have.text', 'Lo sentimos, no hay resultados');
                }
            });
        });
    });
});
