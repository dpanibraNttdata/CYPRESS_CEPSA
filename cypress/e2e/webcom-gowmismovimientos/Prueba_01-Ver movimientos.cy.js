describe('PRUEBA_01 - CONSULTA DE VISTAS', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('webcomptv02', 'prueba1234');

    });
    it('CONSULTAR MOVIMIENTOS', () => {

        cy.fixture('gowMismovimientos').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-GOWMISMOVIMIENTOS
            cy.visit(config.URL);
            cy.wait(7000);

            //CERRAMOS MODAL
            cy.get('.fancybox-close-small').click();

            cy.get('.tabs-container__link--active').click();
            cy.wait(2000);

            cy.get('.false').click();


        });
    });
});
