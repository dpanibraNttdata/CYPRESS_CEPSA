describe('PRUEBA_01 - Cambiar pagina promociones', () => {
    it('Cambiar pagina promociones', () => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('WEBCOMCO2', 'prueba1234');

        // CONFIGURACIONES DEL WIDGET
        cy.fixture('vipDistrict').then((config) => {
            
            // ACCESSO AL WIDGET - WEBCOM-VIPDISTRICT
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('#react-webcom-gow-vipdistrict > .m-promos > .m-promos__pagination > .pagination-complex > .s-angle-right').click();
                    cy.get('#react-webcom-gow-vipdistrict > .m-promos > .m-promos__pagination > .pagination-complex > .s-angle-right').click();
                    cy.get('#react-webcom-gow-vipdistrict2 > .m-promos > .m-promos__pagination > .pagination-complex > .s-angle-right').click();
                }
            });
        });
    });
});
