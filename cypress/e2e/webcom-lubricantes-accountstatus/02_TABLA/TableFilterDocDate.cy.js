describe('TABLA - 04', () => {
    it('Filtro Fecha Documento ', () => {
        // Login en PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

        cy.fixture('lubAccountstatus').then((lubAccSta) => {
            // Acceder al widget
            cy.visit(lubAccSta.URL);
            cy.wait(lubAccSta.widgetLoadTime);

            // Filtro ascendiente Fecha Documento 
            cy.get(lubAccSta.fDocDateUp).click();
            cy.get(lubAccSta.fDocDateFirstResult).should('have.text', '01/01/2004');
            cy.wait(1000);
            cy.screenshot('Filtro ascendiente Fecha Documento ');

            // Filtro descendiente Fecha Documento 
            cy.get(lubAccSta.fDocDateDown).click();
            cy.get(lubAccSta.fDocDateFirstResult).should('have.text', '31/12/2013');
            cy.screenshot('Filtro descendiente Fecha Documento ');

        });
    });
});
