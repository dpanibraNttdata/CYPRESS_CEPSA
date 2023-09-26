describe('PRUEBA_03 - Filtrar categorias', () => {
    it('Cambiar pagina promociones', () => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('WEBCOMCO2', 'prueba1234');

        // CONFIGURACIONES DEL WIDGET
        cy.fixture('vipDistrict').then((config) => {

            // ACCESSO AL WIDGET - WEBCOM-VIPDISTRICT
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('.swiper-slide-active > .m-promos__filters-link').click();
                    cy.get(':nth-child(3) > .m-promos__filters-link').click();
                }
            });
        });
    });
});
