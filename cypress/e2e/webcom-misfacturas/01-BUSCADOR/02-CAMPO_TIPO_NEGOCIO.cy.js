describe('01-BUSCADOR - 02-CAMPO_TIPO_NEGOCIO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('webcomercial19', 'prueba1234');
    });
    it('Buscar por campo Tipo de Negocio', () => {
        // CONFIGURACIONES DEL WIDGET
        cy.fixture('misfacturas').then((config) => {

            // ACCESSO AL WIDGET - WEBCOM-MISFACTURAS
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');
                    cy.get('#from-date').type('2022-02-22');
                    cy.get('#to-date').type('2022-05-20');

                    cy.get("#tipo-negocio").select("CCP");
                    cy.get("#vext-gen1081 form > div.form-group > input").click({ multiple: true });
                    cy.get("section:nth-of-type(2) > section h2", { timeout: 20000 }).should('have.text', 'Lo sentimos, no hay resultados');

                    cy.get("#tipo-negocio").select("CCPGEN");
                    cy.get("#vext-gen1081 form > div.form-group > input").click({ multiple: true });
                    cy.get("section:nth-of-type(2) > section h2", { timeout: 20000 }).should('have.text', 'Lo sentimos, no hay resultados');

                    cy.get("#tipo-negocio").select("CCPLUB");
                    cy.get("#vext-gen1081 form > div.form-group > input").click({ multiple: true });
                    cy.get("section:nth-of-type(2) > section h2", { timeout: 20000 }).should('have.text', 'Lo sentimos, no hay resultados');

                    cy.get("#tipo-negocio").select("CEPSAVVDD");
                    cy.get("#vext-gen1081 form > div.form-group > input").click({ multiple: true });
                    cy.get('.total', { timeout: 20000 }).should('have.text', '4');
                }
            });
        });
    });
});
