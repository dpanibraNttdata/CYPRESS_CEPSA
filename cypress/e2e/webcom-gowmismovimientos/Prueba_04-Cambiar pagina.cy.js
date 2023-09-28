describe('PRUEBA_04 - PAGINACIÓN', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('webcomptv02', 'prueba1234');
    });

    it('PAGINACIÓN', () => {
        cy.fixture('gowMismovimientos').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-GOWMISMOVIMIENTOS
            cy.visit(config.URL);
            cy.wait(4000);

            //CERRAMOS MODAL
            cy.get('.fancybox-close-small').click();
            //CAMBIAR PÀGINA
            cy.get('.s-angle-right').click();
            cy.get('.s-angle-right').click();
        });
    });
});
