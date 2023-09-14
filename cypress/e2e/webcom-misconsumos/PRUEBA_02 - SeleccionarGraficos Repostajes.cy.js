describe('PRUEBA_01 - CAMBIAR PÁGINA', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('WEBCOMCO2', 'prueba1234');

    });
    it('CONSULTAR INFORME', () => {

        cy.fixture('misConsumos').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL);
            cy.wait(4000);
            //STE 0 PRUEBA DE CAMBIO DE LITROS Y DÓALRES

            cy.get('.btn-on').click();
            cy.wait(2000);

            cy.get('.btn-off').click();
            cy.wait(2000);

      

            cy.get("#react > div > div > div > div:nth-of-type(2) div:nth-of-type(1) > select").select("2022");

        });
    });
});
