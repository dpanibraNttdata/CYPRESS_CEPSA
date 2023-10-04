describe('PRUEBA_02 - FILTROS DE LA TABLA', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('webcomstarressa', 'prueba1234');

    });
    it('FILTROS DE LA TABLA', () => {
        cy.fixture('starDetalleoperaciones').then((starDetOpe) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(starDetOpe.URL);
            cy.wait(40000);

            cy.get('.viewbar').click();
            cy.get(':nth-child(1) > .custom-control-label').click();
            cy.get('.viewbar').click();

            cy.get('#dateFrom_basic') // Selecciona el input por su ID
                .clear()               // Borra el valor actual
                .type('2023-01-12')    // Escribe el nuevo valor
                .should('have.value', '2023-01-12'); // Verifica que el valor haya sido cambiado correctamente
            cy.wait(2000);
            cy.get("div.b-common-form__actions > input").click({ force: true });
            
            cy.wait(2000);

            cy.get(':nth-child(2) > .th-inner > .th-inner__order > :nth-child(1) > .s').click();
            cy.get(':nth-child(2) > .th-inner > .th-inner__order > :nth-child(2) > .s').click();
            cy.screenshot();

            cy.get(':nth-child(4) > .th-inner > .th-inner__order > :nth-child(1) > .s').click();
            cy.get(':nth-child(4) > .th-inner > .th-inner__order > :nth-child(2) > .s').click();
            cy.screenshot();
        });
    });
});
