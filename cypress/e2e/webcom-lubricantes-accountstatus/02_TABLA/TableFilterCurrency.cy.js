describe('TABLA - 07', () => {
    it('Filtro Moneda ', () => {
        // Login en PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

        cy.fixture('lubAccountstatus').then((lubAccSta) => {
            // Acceder al widget
            cy.visit(lubAccSta.URL);
            cy.wait(lubAccSta.widgetLoadTime);

            // Filtro ascendiente Moneda 
            cy.get(lubAccSta.fCurrencyUp).click();
            cy.get(lubAccSta.fCurrencyFirstResult).should('have.text', 'EUR');
            cy.wait(1000);
            cy.screenshot('Filtro ascendiente Moneda ');

            // Filtro descendiente Moneda 
            cy.get(lubAccSta.fCurrencyDown).click();
            cy.get(lubAccSta.fCurrencyFirstResult).should('have.text', 'EUR');
            cy.screenshot('Filtro descendiente Moneda');

        });
    });
});
