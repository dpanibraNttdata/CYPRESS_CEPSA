describe('PRUEBA_05', () => {
    it('DESCARGA DETALLE DE LA SOLICITUD', () => {
        cy.loginPREMGMT('webcomercialvvdd02', 'prueba1234');
        cy.fixture('vvddMisPedidos').then((vvddMisPed) => {
            cy.visit(vvddMisPed.URL);
            cy.wait(5000);
        });
        cy.get('table').find('tbody').first().find('tr').first().find('td').last().find('a').click();
        cy.wait(2000);
        cy.get('a.b-order-sheet-common-links__download').click({ force: true });
        cy.wait(2000);
        cy.screenshot();
    });
});
