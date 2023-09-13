describe('PRUEBA_03', () => {
    it('Paginación de la tabla', () => {
        cy.fixture('starDetalleoperaciones').then((starDetOpe) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(starDetOpe.URL);
            cy.wait(15000);

            cy.get('.viewbar').click();
            cy.get(':nth-child(1) > .custom-control-label').click();
            cy.get('.b-common-form__actions__submit').click({ force: true });
            cy.wait(3000);

            cy.get('.s-angle-right').click();
            cy.get('.s-angle-right').click();
            cy.get('.s-angle-right').click();
            cy.get('.s-angle-right').click();
            cy.get('#counterNumber').contain('5');

            cy.get('.pagination-complex > .s-angle-left').click();
            cy.get('.pagination-complex > .s-angle-left').click();
            cy.get('.pagination-complex > .s-angle-left').click();
            cy.get('.pagination-complex > .s-angle-left').click();
            cy.get('#counterNumber').contain('1');

            cy.screenshot();
        });
    });
});
