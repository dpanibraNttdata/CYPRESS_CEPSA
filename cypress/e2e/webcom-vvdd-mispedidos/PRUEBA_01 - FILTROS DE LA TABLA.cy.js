describe('PRUEBA_01 - FILTROS DE LA TABLA', () => {
    it('FILTROS DE LA TABLA', () => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

        cy.fixture('lubAccountstatus').then((lubAccStat) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(lubAccStat.URL);
            cy.wait(2000);

            // - FILTRO N° PEDIDO
            cy.get(lubAccStat.fOrdNumUp).click();
            cy.get(lubAccStat.fOrdNumDown).click();

            // - FECHA DOCUMENTO
            cy.get(lubAccStat.fDocDateUp).click();
            cy.get(lubAccStat.fDocDateDown).click();
            cy.screenshot();

            // - FECHA VENCIMIENTO
            cy.get(lubAccStat.fExpDateUp).click();
            cy.get(lubAccStat.fExpDateDown).click();

            // - IMPORTE
            cy.get(lubAccStat.fAmountUp).click();
            cy.get(lubAccStat.fAmountDown).click();
            cy.screenshot();

            // - MONEDA
            cy.get(lubAccStat.fCurrencyUp).click();
            cy.get(lubAccStat.fCurrencyDown).click();
        });
    });
});
