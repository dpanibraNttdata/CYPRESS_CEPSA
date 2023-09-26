describe('PRUEBA_03', () => {
    beforeEach(() => {
        cy.loginPREMGMT('webcomercialvvdd02', 'prueba1234');
    });

    it('DESCARGA LISTA DE RESULTADOS', () => {
        cy.fixture('vvddMisPedidos').then((vvddMisPed) => {
            cy.visit(vvddMisPed.URL);
            cy.wait(8000);
            cy.get('a.link').click();
            cy.screenshot();
        });
    });
});
