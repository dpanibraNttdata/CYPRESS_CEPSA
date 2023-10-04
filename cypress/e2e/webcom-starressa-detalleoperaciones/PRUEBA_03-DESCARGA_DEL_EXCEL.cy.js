describe('PRUEBA_03 - DESCARGA DEL EXCEL', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('webcomstarressa', 'prueba1234');

    });
    it('DESCARGA DEL EXCEL', () => {
        cy.fixture('starDetalleoperaciones').then((starDetOpe) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(starDetOpe.URL);
            cy.wait(15000);

            cy.get('.viewbar').click();
            cy.get(':nth-child(1) > .custom-control-label').click();
            cy.get('.b-common-form__actions__submit').click({ force: true });
            cy.wait(3000);

            cy.get('.link').click();
            cy.screenshot();
        });
    });
});
