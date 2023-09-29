describe('PRUEBA_09', () => {    
    it('DETALLE DEL PRODUCTO', () => {
        cy.loginPREMGMT('webcomercialvvdd02', 'prueba1234');
        cy.fixture('vvddMisPedidos').then((vvddMisPed) => {
            cy.visit(vvddMisPed.URL);
            cy.wait(8000);
            cy.get('tbody > :nth-child(1) > :nth-child(7) > a').click();
            cy.wait(1000);
            cy.get('div.b-order-sheet-items').first().find('table').find('tbody').find('tr').first().find('td').first().find('i').click();
            cy.screenshot();
        });
    });

});
