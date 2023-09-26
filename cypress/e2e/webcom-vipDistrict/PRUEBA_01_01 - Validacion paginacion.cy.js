describe('PRUEBA_01 - Cambiar pagina promociones', () => {
    it('Cambiar pagina promociones', () => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('WEBCOMCO2', 'prueba1234');

        // CONFIGURACIONES DEL WIDGET
        cy.fixture('vipDistrict').then((config) => {

            // ACCESSO AL WIDGET - WEBCOM-VIPDISTRICT
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get("#vext-gen1084 div.m-promos__pagination").click();
                    cy.get("#vext-gen1084 a.s-angle-right").click();
                    cy.get("#vext-gen1084 a.s-angle-right").click();
                    cy.get("#vext-gen1084 a.s-angle-right").click();
                    cy.get("#vext-gen1084 a.s-angle-right").click();
                    cy.get("#\\31 78075").click();
                    cy.get("div.m-promo-sheet__content > p").click();
                }
            });
        });
    });
});
