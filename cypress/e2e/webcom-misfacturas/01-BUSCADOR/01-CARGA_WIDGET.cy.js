describe('01-BUSCADOR - 01-CARGA_WIDGET', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('webcomercial19', 'prueba1234');
    });
    it('Validación de la carga de widget', () => {
        // CONFIGURACIONES DEL WIDGET
        cy.fixture('misfacturas').then((config) => {

            // ACCESSO AL WIDGET - WEBCOM-MISFACTURAS
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('#tipo-negocio').should('be.disabled');
                    cy.get('#numero-factura').should('be.disabled');
                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');
                }
            });
        });
    });
});
