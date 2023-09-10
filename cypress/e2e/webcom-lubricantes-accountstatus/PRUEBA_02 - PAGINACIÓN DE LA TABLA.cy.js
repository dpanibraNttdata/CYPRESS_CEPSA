describe('PRUEBA_02', () => {
    it('PAGINACIÓN DE LA TABLA', () => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

        cy.fixture('lubAccountstatus').then((lubAccStat) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(lubAccStat.URL);
            cy.wait(2000);

            // PAGINACIÓN HASTA LA PÁGINA 6
            cy.get(lubAccStat.anRight).click({ multiple: true });
            cy.get(lubAccStat.anRight).click({ multiple: true });
            cy.get(lubAccStat.anRight).click({ multiple: true });
            cy.get(lubAccStat.anRight).click({ multiple: true });
            cy.get(lubAccStat.anRight).click({ multiple: true });
            cy.screenshot();

            // PAGINACIÓN DE VUELTA HASTA LA PÁGINA 2
            cy.get(lubAccStat.anLeft).click({ multiple: true });
            cy.get(lubAccStat.anLeft).click({ multiple: true });
            cy.get(lubAccStat.anLeft).click({ multiple: true });
            cy.get(lubAccStat.anLeft).click({ multiple: true });
            cy.screenshot();
        });
    });

});
