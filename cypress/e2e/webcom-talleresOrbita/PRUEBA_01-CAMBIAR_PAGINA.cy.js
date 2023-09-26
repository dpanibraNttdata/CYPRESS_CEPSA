describe('PRUEBA_01 - CAMBIAR PÁGINA', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

    });
    it('CAMBIAR PÁGINA', () => {

        cy.fixture('talleresOrbita').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL);
            cy.wait(4000);

            cy.get('.b-table-simple__link > a').click();

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
