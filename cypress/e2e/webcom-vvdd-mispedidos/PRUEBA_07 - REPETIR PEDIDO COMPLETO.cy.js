describe('PRUEBA_07', () => {
    it('REPETIR PEDIDO COMPLETO', () => {
        cy.loginPREMGMT('webcomercialvvdd02', 'prueba1234');

        cy.fixture('vvddMisPedidos').then((vvddMisPed) => {
            cy.visit(vvddMisPed.URL);
            cy.wait(5000);
            cy.get('table').find('tbody').first().find('tr').first().find('td').last().find('a').click();
            cy.wait(2000);
            cy.get('div.b-order-sheet-items__header').first().find('a').click();
            cy.wait(500);
            cy.get('section.modal__info--wrapper').find('div.modal__footer').find('a').click();
            cy.wait(5000);
            cy.screenshot();
        });
    });
});
