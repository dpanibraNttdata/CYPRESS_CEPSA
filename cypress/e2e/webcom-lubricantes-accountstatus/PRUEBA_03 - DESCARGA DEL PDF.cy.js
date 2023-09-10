describe('PRUEBA_03', () => {
    it('DESCARGA DEL PDF', () => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

        cy.fixture('lubAccountstatus').then((lubAccStat) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(lubAccStat.URL);
            cy.wait(2000);

            // CLICK EN EL BOTON DE DESCARGA
            cy.get(lubAccStat.downloadBtn).click();
            cy.get('.b-common-form__actions__submit').click();
            cy.screenshot();
        });
    });
});
