describe('01-BUSCADOR - 05-CAMPO_FECHAS', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('webcomercial19', 'prueba1234');
    });
    it('Buscar por fechas', () => {
        // CONFIGURACIONES DEL WIDGET
        cy.fixture('misfacturas').then((config) => {

            // ACCESSO AL WIDGET - WEBCOM-MISFACTURAS
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');

                    cy.get('#from-date').type('2022-09-22');
                    cy.get("#vext-gen1081 form > div.form-group > input").click();
                    cy.get('.total', { timeout: 20000 }).should('have.text', '24');

                    cy.get('#to-date').type('2022-09-20');
                    cy.get("#vext-gen1081 form > div.form-group > input").click();
                    cy.get('.total', { timeout: 20000 }).should('not.exist');
                }
            });
        });
    });
});
