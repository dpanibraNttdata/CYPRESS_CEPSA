describe('RESULTADO - 01', () => {
    it('Correcta carga del widget', () => {
        // Login en PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

        cy.fixture('lubAccountstatus').then((lubAccSta) => {
            // Acceder al widget
            cy.visit(lubAccSta.URL);
            cy.wait(lubAccSta.widgetLoadTime);

            // Comprobar correcta carga del widget
            cy.get('.table-title').should('have.text', 'Estado de cuenta');
        });
    });
});
