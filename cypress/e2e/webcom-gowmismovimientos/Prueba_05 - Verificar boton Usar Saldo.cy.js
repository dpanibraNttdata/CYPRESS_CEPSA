describe('PRUEBA_01 - CONSULTA DE VISTAS', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('webcomptv02', 'prueba1234');

    });
    it('CONSULTAR MOVIMIENTOS', () => {

        cy.fixture('gowMismovimientos').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-GOWMISMOVIMIENTOS
            cy.visit(config.URL);
            cy.wait(4000);

            //CERRAMOS MODAL
            cy.get('.fancybox-close-small').click();
            //CAMBIAR PÀGINA
            cy.get('.b-available-credit__link').click();


        });
    });
});
