describe('PRUEBA_01 - CAMBIAR PÁGINA', () => {

    it('CONSULTAR INFORME', () => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

        cy.fixture('talleresOrbita').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL);
            cy.wait(4000);

            cy.get('table').find('tbody').first().find('tr').eq(1).find('td').eq(4).find('a').click();

            // CAMBIAMOS DE PÁGINA 2
            cy.wait(3000);
            cy.get('.s-angle-right').click();


            // CAMBIAMOS DE PÁGINA 3
            cy.wait(3000);
            cy.get('.s-angle-right').click();

            // REGRESAMOS A LA PÁGINA 2
            cy.wait(3000);
            cy.get('.s-angle-left').click();

            // REGRESAMOS A LA PÁGINA PRINCIPAL
            cy.wait(3000);
            cy.get('.mb60 > .link').click();

        });
    });
});
