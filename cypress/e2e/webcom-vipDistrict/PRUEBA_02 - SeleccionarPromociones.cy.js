describe('PRUEBA_01 - CAMBIAR PÁGINA', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('WEBCOMCO2', 'prueba1234');

    });
    it('CONSULTAR INFORME', () => {

        cy.fixture('vipDistrict').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL);
            cy.wait(7000);
            cy.get('#react-webcom-gow-vipdistrict > .m-promos > .m-promos__main > .m-promos__container > .m-promos__wrapper > :nth-child(4) > .m-promos__promo-content > #151573').click();
            cy.get('.m-promo-sheet__link').click();
        });
    });
});
