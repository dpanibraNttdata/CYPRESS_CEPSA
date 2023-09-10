describe('PRUEBA_02', () => {
    it('ORDENAR TABLA (FILTROS)', () => {
        cy.loginPREMGMT('webcomercialvvdd02', 'prueba1234');

        cy.fixture('vvddMisPedidos').then((vvddMisPed) => {
            cy.visit(vvddMisPed.URL);
            cy.wait(8000);
        });
        cy.screenshot();
        cy.get('table').find('thead').find('tr').find('th').first().find('div').find('div').find('a').first().click();
        cy.screenshot();
    });
});
