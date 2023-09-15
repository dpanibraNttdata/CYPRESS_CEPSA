describe('TABLA - 05', () => {
    it('Filtro Fecha Vencimiento', () => {
        // Login en PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

        cy.fixture('lubAccountstatus').then((lubAccSta) => {
            // Acceder al widget
            cy.visit(lubAccSta.URL);
            cy.wait(lubAccSta.widgetLoadTime);
            // Filtro ascendiente Fecha Vencimiento
            cy.get(lubAccSta.fExpDateUp).click();
            cy.get(lubAccSta.fExpDateFirstResult).should('have.text', '01/01/2015');
            cy.wait(1000);
            cy.screenshot('Filtro ascendiente Fecha Vencimiento');

            // Filtro descendiente Fecha Vencimiento
            cy.get(lubAccSta.fExpDateDown).click();
            cy.get(lubAccSta.fExpDateFirstResult).should('have.text', '31/12/2014');
            cy.screenshot('Filtro descendiente Fecha Vencimiento');

        });
    });
});
