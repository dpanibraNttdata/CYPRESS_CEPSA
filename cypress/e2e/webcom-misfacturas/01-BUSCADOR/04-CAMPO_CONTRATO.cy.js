describe('01-BUSCADOR - 04-CAMPO_CONTRATO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('webcomercial19', 'prueba1234');
    });
    it('Buscar por campo Contrato', () => {
        // CONFIGURACIONES DEL WIDGET
        cy.fixture('misfacturas').then((config) => {

            // ACCESSO AL WIDGET - WEBCOM-MISFACTURAS
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');
                    cy.get('#from-date').type('2022-02-22');
                    cy.get('#to-date').type('2022-05-20');
                    
                    cy.get('#numero-factura').type("11");
                    cy.get("#vext-gen1081 form > div.form-group > input").click();
                    cy.get("section:nth-of-type(2) > section h2", { timeout: 20000 }).should('have.text', 'Lo sentimos, no hay resultados');

                    cy.get("#numero-factura").clear().type("1120855355");
                    cy.get("#vext-gen1081 form > div.form-group > input").click();
                    cy.get('[title="date"] > p', { timeout: 20000 }).should('have.text', '1120855355');
                }
            });
        });
    });
});
