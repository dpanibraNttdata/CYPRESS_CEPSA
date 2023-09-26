describe('PRUEBA_02-FILTRO_TALLARES', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

    });
    it('FILTRO_TALLARES', () => {
        cy.fixture('talleresOrbita').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL);
            cy.wait(4000);

            // cy.get('table').find('tbody').first().find('tr').eq(1).find('td').eq(4).find('a').click();
            cy.get('.b-table-simple__link > a').click();
            cy.wait(4000);

            //PROBAMOS LA SELECCION DE TALLERES 
            cy.get('select#selectTalleres').select('Mostrar 100 talleres');
            cy.wait(4000);
            cy.get('select#selectTalleres').select('Mostrar 50 talleres');

            cy.wait(4000);
            cy.get('select#selectTalleres').select('Mostrar 20 talleres');

        });
    });
});
