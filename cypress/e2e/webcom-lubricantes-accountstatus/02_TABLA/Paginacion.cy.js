describe('TABLA - 02', () => {
    it('PAGINACIÓN DE LA TABLA', () => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

        cy.fixture('lubAccountstatus').then((lubAccStat) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(lubAccStat.URL);
            cy.wait(lubAccSta.widgetLoadTime);

            // PAGINACIÓN HASTA LA PÁGINA 6
            cy.get(lubAccStat.anRight).click({ multiple: true });
            cy.get(lubAccStat.anRight).click({ multiple: true });
            cy.get(lubAccStat.anRight).click({ multiple: true });
            cy.get(lubAccStat.anRight).click({ multiple: true });
            cy.get(lubAccStat.anRight).click({ multiple: true });
            cy.get(lubAccStat.counterNumber).should('have.value', 6);
            cy.screenshot('PAGINA 6');

            // PAGINACIÓN DE VUELTA HASTA LA PÁGINA 2
            cy.get(lubAccStat.anLeft).click({ multiple: true });
            cy.get(lubAccStat.anLeft).click({ multiple: true });
            cy.get(lubAccStat.anLeft).click({ multiple: true });
            cy.get(lubAccStat.anLeft).click({ multiple: true });
            cy.get(lubAccStat.counterNumber).should('have.value', 2);
            cy.screenshot('PAGINA 2');
        });
    });

});
