describe('PRUEBA_06', () => {
    it('INCIDENCIA DE PEDIDO', () => {
        cy.loginPREMGMT('webcomercialvvdd02', 'prueba1234');
        cy.fixture('vvddMisPedidos').then((vvddMisPed) => {
            cy.visit(vvddMisPed.URL);
            cy.wait(5000);
            cy.get('tbody > :nth-child(1) > :nth-child(7) > a').click();
            cy.wait(2000);
            cy.get('div.b-order-sheet-amount__header').find('a').click({ force: true });
            cy.wait(2000);
            cy.screenshot();
        });
    });
});
