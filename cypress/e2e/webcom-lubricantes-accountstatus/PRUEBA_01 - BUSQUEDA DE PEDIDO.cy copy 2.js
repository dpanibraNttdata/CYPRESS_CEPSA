describe('PRUEBA_01', () => {
    it('BUSQUEDA DE PEDIDO', () => {
        cy.loginPREMGMT('webcomercialvvdd02', 'prueba1234');

        cy.fixture('vvddMisPedidos').then((vvddMisPed) => {
            cy.visit(vvddMisPed.URL);
            cy.wait(8000);
        });

        cy.get('input#requestNumber').type('10000070');
        cy.wait(2000);
        cy.get('.results-orders--text').contains('Se han encontrado');
        cy.screenshot();

        cy.get('input[type="submit"]').click();
        cy.wait(2000);

        // VALORES PARA EL SELECTOR #orderStates
        // value A = Anulado
        // value B = Pendiente validacion
        // value C = Confirmado
        // value E = Entregado
        // value G = Cargado
        // value L = Cancelado
        // value N = Pendiente anular
        // value P = Pendiente
        // value R = Programado
        cy.get('select#orderStates').select('B');

        // VALORES PARA EL SELECTOR #productType
        // value 000000000417190000 = Gasoleo calefacción
        // value 000000000417200000 = Gasoleo calefacción rendimiento
        // value 000000000413450000 = Gasoleo b
        // value 000000000413470000 = Agromax diesel
        cy.get('select#productType').select('000000000413470000');

        cy.get('input#requestNumber').clear();
        cy.wait(2000);
        cy.screenshot();

        cy.get('input#dateFrom').type('01/05/2023');
        cy.get('input[type="submit"]').click();
        cy.wait(2000);

        cy.get('select#orderStates').select(0);
        cy.get('input[type="submit"]').click();
        cy.wait(2000);
        cy.screenshot();

    });
});
