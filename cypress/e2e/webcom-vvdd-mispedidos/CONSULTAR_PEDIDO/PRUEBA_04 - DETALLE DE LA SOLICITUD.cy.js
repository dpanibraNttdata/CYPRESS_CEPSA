describe('PRUEBA_04', () => {
    it('DETALLE DE LA SOLICITUD', () => {
        cy.loginPREMGMT('webcomercialvvdd02', 'prueba1234');
        cy.fixture('vvddMisPedidos').then((vvddMisPed) => {
            cy.visit(vvddMisPed.URL);
            cy.wait(5000);
            cy.get('tbody > :nth-child(1) > :nth-child(7) > a').click();
            cy.screenshot();
        });
    });
});
