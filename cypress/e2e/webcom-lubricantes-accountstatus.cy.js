describe('WEBCOM-LUBRICANTES-ACCOUNTSTATUS', () => {

    beforeEach(() => {
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('PRUEBA_01 - FILTROS DE LA TABLA', () => {
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

            // - FECHA VENCIMIENTO
            cy.get(lubAccStat.fExpDateUp).click();
            cy.get(lubAccStat.fExpDateDown).click();

            // - IMPORTE
            cy.get(lubAccStat.fAmountUp).click();
            cy.get(lubAccStat.fAmountDown).click();

            // - MONEDA
            cy.get(lubAccStat.fCurrencyUp).click();
            cy.get(lubAccStat.fCurrencyDown).click();
        });
    });

    it('PRUEBA_02 - PAGINACIÓN DE LA TABLA', () => {
        cy.fixture('lubAccountstatus').then((lubAccStat) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(lubAccStat.URL);
            cy.wait(2000);

            cy.get(lubAccStat.anRight).click({ multiple: true });
            cy.get(lubAccStat.anRight).click({ multiple: true });
            cy.get(lubAccStat.anRight).click({ multiple: true });
            cy.get(lubAccStat.anRight).click({ multiple: true });
            cy.get(lubAccStat.anRight).click({ multiple: true });
            cy.get(lubAccStat.anLeft).click({ multiple: true });
            cy.get(lubAccStat.anLeft).click({ multiple: true });
            cy.get(lubAccStat.anLeft).click({ multiple: true });
            cy.get(lubAccStat.anLeft).click({ multiple: true });
        });
    });

    it('PRUEBA_03 - DESCARGA DEL PDF', () => {
        cy.fixture('lubAccountstatus').then((lubAccStat) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(lubAccStat.URL);
            cy.wait(2000);

            cy.get(lubAccStat.downloadBtn).click();
        });
    });

});
