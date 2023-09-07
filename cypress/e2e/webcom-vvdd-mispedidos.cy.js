describe('WEBCOM-VVDD-MISPEDIDOS', () => {
    beforeEach(() => {
        cy.loginPREMGMT('webcomercialvvdd02', 'prueba1234');
    });

    it('PRUEBA_01 - BUSQUEDA DE PEDIDO', () => {
        cy.fixture('vvddMisPedidos').then((vvddMisPed) => {
            cy.visit(vvddMisPed.URL);
            cy.wait(5000);
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

    it('PRUEBA_02 - ORDENAR TABLA (FILTROS)', () => {
        cy.screenshot();
        cy.fixture('vvddMisPedidos').then((vvddMisPed) => {
            cy.visit(vvddMisPed.URL);
            cy.wait(5000);
        });
        cy.get('table').find('thead').find('tr').find('th').first().find('div').find('div').find('a').first().click();
        cy.screenshot();
    });

    it('PRUEBA_03 - DESCARGA LISTA DE RESULTADOS', () => {
        cy.fixture('vvddMisPedidos').then((vvddMisPed) => {
            cy.visit(vvddMisPed.URL);
            cy.wait(5000);
        });
        cy.get('a.link').click();
        cy.screenshot();
    });

    it('PRUEBA_04 - DETALLE DE LA SOLICITUD', () => {
        cy.fixture('vvddMisPedidos').then((vvddMisPed) => {
            cy.visit(vvddMisPed.URL);
            cy.wait(5000);
        });
        cy.get('table').find('tbody').first().find('tr').first().find('td').last().find('a').click();
        cy.wait(2000);
        cy.screenshot();
    });

    it('PRUEBA_05 - DESCARGA DETALLE DE LA SOLICITUD', () => {
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

    it('PRUEBA_06 - INCIDENCIA DE PEDIDO', () => {
        cy.fixture('vvddMisPedidos').then((vvddMisPed) => {
            cy.visit(vvddMisPed.URL);
            cy.wait(5000);
        });
        cy.get('table').find('tbody').first().find('tr').first().find('td').last().find('a').click();
        cy.wait(2000);
        cy.get('div.b-order-sheet-amount__header').find('a').click({ force: true });
        cy.wait(2000);
        cy.screenshot();
    });

    it('PRUEBA_07 - REPETIR PEDIDO COMPLETO', () => {
        cy.fixture('vvddMisPedidos').then((vvddMisPed) => {
            cy.visit(vvddMisPed.URL);
            cy.wait(5000);
        });
        cy.get('table').find('tbody').first().find('tr').first().find('td').last().find('a').click();
        cy.wait(2000);
        cy.screenshot();
        cy.get('div.b-order-sheet-items__header').first().find('a').click();
        cy.wait(500);
        cy.get('section.modal__info--wrapper').find('div.modal__footer').find('a').click();
        cy.wait(2000);
        cy.screenshot();
    });

    // NOTA: La prueba 07 y 08 no pueden estar activas al mismo tiempo porque redirigen la aplicación a otra página
    // it('// PRUEBA_08 - REPETIR SOLO UN PRODUCTO', () => {
    //     cy.get('div.b-order-sheet-items').first().find('table').find('tbody').find('tr').first().find('td').last().find('a').click();
    //     cy.wait(2000);
    // });

    // it('PRUEBA_09 - DETALLE DEL PRODUCTO --- ERROR EN AL APLICACIÓN', () => {
    //     cy.get('div.b-order-sheet-items').first().find('table').find('tbody').find('tr').first().find('td').first().find('i').click();
    //     cy.wait(2000);
    // });

});
