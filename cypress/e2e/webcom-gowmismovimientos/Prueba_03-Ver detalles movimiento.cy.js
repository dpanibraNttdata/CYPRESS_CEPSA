describe('PRUEBA_03 - VER DETALLES DE MOVIMIENTOS', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('webcomptv02', 'prueba1234');
    });

    it('VER DETALLES DE MOVIMIENTOS', () => {
        cy.fixture('gowMismovimientos').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-GOWMISMOVIMIENTOS
            cy.visit(config.URL);
            cy.wait(7000);

            //CERRAMOS MODAL
            cy.get('.fancybox-close-small').click();

            cy.get(':nth-child(8) > .link').click();

            cy.get('.modal_content_icon').click();
        });
    });
});
