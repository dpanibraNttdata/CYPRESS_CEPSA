describe('TABLA - 01', () => {
    it('Correcta carga de la tabla de resultados', () => {
        // Login en PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

        cy.fixture('lubAccountstatus').then((lubAccSta) => {
            // Acceder al widget
            cy.visit(lubAccSta.URL);
            cy.wait(lubAccSta.widgetLoadTime);

            // Comprobar correcta carga de la tabla
            cy.get('.table > tbody > tr.stripped').then(($lis) => {
                // La tabla debe tener 10 filas
                expect($lis).to.have.length(10);
                cy.screenshot('TABLA CON 10 FILAS');
            })
        });
    });
});
