describe('PRUEBA_01', () => {
    it('Formularios y Resultados', () => {
        cy.fixture('starDetalleoperaciones').then((starDetOpe) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(starDetOpe.URL);
            cy.wait(15000);

            cy.get('.b-common-form__actions__submit').click({ force: true });
            cy.get('.viewbar').click();
            cy.get(':nth-child(1) > .custom-control-label').click();
            cy.get('#dateFrom_basic').type('2022-08-06', { force: true });
            cy.wait(2000);
            cy.get('.b-common-form__actions__submit').click({ force: true });
            cy.screenshot();
        });
    });
});
