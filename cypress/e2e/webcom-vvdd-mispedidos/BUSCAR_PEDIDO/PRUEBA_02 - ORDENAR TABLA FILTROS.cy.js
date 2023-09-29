describe('PRUEBA_02', () => {
    it('ORDENAR TABLA (FILTROS)', () => {
        cy.loginPREMGMT('webcomercialvvdd02', 'prueba1234');

        cy.fixture('vvddMisPedidos').then((vvddMisPed) => {
            cy.visit(vvddMisPed.URL);
            cy.wait(8000);
            cy.screenshot();

            // N° DE SOLICITUD/ESTADO
            cy.get(':nth-child(1) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(2) > .s').click();

            // N° DE INSTALACIONES
            cy.get(':nth-child(2) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(1) > .s').click();
            cy.get(':nth-child(2) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(2) > .s').click();
            // FECHA DE ENTREGA
            cy.get(':nth-child(3) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(1) > .s').click();
            cy.get(':nth-child(3) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(2) > .s').click();
            // N° DE PEDIDOS
            cy.get(':nth-child(4) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(1) > .s').click();
            cy.get(':nth-child(4) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(2) > .s').click();

            // IMPORTE TOTAL
            cy.get(':nth-child(5) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(1) > .s').click();
            cy.get(':nth-child(5) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(2) > .s').click();

            cy.screenshot();
        });
    });
});
