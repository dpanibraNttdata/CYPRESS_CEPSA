describe('PRUEBA_01 - FORMULARIO Y RESULTADO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('webcomstarressa', 'prueba1234');

    });
    it('FORMULARIO Y RESULTADOS', () => {
        cy.fixture('starDetalleoperaciones').then((starDetOpe) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(starDetOpe.URL);
            cy.wait(20000);

            cy.get('.b-common-form__actions__submit').click({ force: true });
            cy.get('.viewbar').click();
            cy.wait(200);
            cy.get(':nth-child(1) > .custom-control-label').click();
            cy.wait(200);
            cy.get('#dateFrom_basic').type('2022-08-06', { force: true });
            cy.wait(2000);
            cy.get('.b-common-form__actions__submit').click({ force: true });
            cy.screenshot();
        });
    });
});
