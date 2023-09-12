describe('PRUEBA_02', () => {
    it('Prueba de Filtros', () => {
        cy.fixture('starDetalleoperaciones').then((starDetOpe) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(starDetOpe.URL);
            cy.wait(15000);

            cy.get('.viewbar').click();
            cy.get(':nth-child(1) > .custom-control-label').click();
            cy.get('.b-common-form__actions__submit').click({ force: true });
            cy.wait(3000);

            cy.get(':nth-child(2) > .th-inner > .th-inner__order > :nth-child(1) > .s').click();
            cy.get(':nth-child(2) > .th-inner > .th-inner__order > :nth-child(2) > .s').click();
            cy.screenshot();

            cy.get(':nth-child(4) > .th-inner > .th-inner__order > :nth-child(1) > .s').click();
            cy.get(':nth-child(4) > .th-inner > .th-inner__order > :nth-child(2) > .s').click();
            cy.screenshot();
        });
    });
});
