describe('PRUEBA_02 - SeleccionarPromociones', () => {
    it('SeleccionarPromociones', () => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('WEBCOMCO2', 'prueba1234');

        // CONFIGURACIONES DEL WIDGET
        cy.fixture('vipDistrict').then((config) => {

            // ACCESSO AL WIDGET - WEBCOM-VIPDISTRICT
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('#react-webcom-gow-vipdistrict > .m-promos > .m-promos__main > .m-promos__container > .m-promos__wrapper > :nth-child(4) > .m-promos__promo-content > #151573').click();
                    cy.get('.m-promo-sheet__link').click();
                }
            });
        });
    });
});
