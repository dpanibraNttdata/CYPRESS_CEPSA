describe('TABLA - 06', () => {
    it('Filtro Importe ', () => {
        // Login en PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

        cy.fixture('lubAccountstatus').then((lubAccSta) => {
            // Acceder al widget
            cy.visit(lubAccSta.URL);
            cy.wait(lubAccSta.widgetLoadTime);

            // Filtro ascendiente Importe 
            cy.get(lubAccSta.fAmountUp).click();
            cy.get(lubAccSta.fAmountFirstResult).should('include.text', '273,34');
            cy.wait(1000);
            cy.screenshot('Filtro ascendiente Importe');

            // Filtro descendiente Importe 
            cy.get(lubAccSta.fAmountDown).click();
            cy.get(lubAccSta.fAmountFirstResult).should('include.text', '314.192,30');
            cy.screenshot('Filtro descendiente Importe');

        });
    });
});
