describe('TABLA - 03', () => {
    it('Filtro Numero de Documento ', () => {
        // Login en PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

        cy.fixture('lubAccountstatus').then((lubAccSta) => {
            // Acceder al widget
            cy.visit(lubAccSta.URL);
            cy.wait(lubAccSta.widgetLoadTime);

            // Filtro ascendiente Numero de Documento 
            cy.get(lubAccSta.fOrdNumUp).click();
            cy.get(lubAccSta.fOrdNumFirstResult).should('have.text', '2013058083000041');
            cy.wait(1000);
            cy.screenshot('Filtro ascendiente Numero de Documento');

            // Filtro descendiente Numero de Documento 
            cy.get(lubAccSta.fOrdNumDown).click();
            cy.get(lubAccSta.fOrdNumFirstResult).should('have.text', 'VTO 28/01/14');
            cy.screenshot('Filtro descendiente Numero de Documento');

        });
    });
});
