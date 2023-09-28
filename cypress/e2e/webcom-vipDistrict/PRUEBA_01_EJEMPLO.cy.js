// ---PLANTILLA DESKTOP
describe('PRUEBA_01 - NOMBRE_DEL_ARCHIVO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });
    it('Descripción/Validación de la prueba', () => {
        // CONFIGURACIONES DEL WIDGET
        cy.fixture('vipDistrict').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL);
            // ---Parte extraida de la grabación
            // la captura del primer elemento debe tener un timeout
            // de 20s para asegurar la carga correcta del widget
            cy.get("#vext-gen1084 div.m-promos__pagination", { timeout: 20000 }).click();
            cy.get("#vext-gen1084 a.s-angle-right").click();
            cy.get("#vext-gen1084 a.s-angle-right").click();
            cy.get("#vext-gen1084 a.s-angle-right").click();
            cy.get("#vext-gen1084 a.s-angle-right").click();
            cy.get("#\\31 78075").click();
            cy.get("div.m-promo-sheet__content > p").click();

            // se agrega un should() para validar la prueba.
            // Note que el ultimo click que se dio en la
            // grabación es justamente este elemento.
            cy.get("div.m-promo-sheet__content > p")
                .should('have.text', 'Prepara tu viaje en trenes de alta velocidad a bajo precio');
        });
    });
});

// ---PLANTILLA NPM
describe('PRUEBA_01 - NOMBRE_DEL_ARCHIVO', () => {
    it('Descripción/Validación de la prueba', () => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('WEBCOMCO2', 'prueba1234');

        // CONFIGURACIONES DEL WIDGET
        cy.fixture('vipDistrict').then((config) => {

            // ACCESSO AL WIDGET - WEBCOM-VIPDISTRICT
            cy.visit(config.URL, {
                onLoad: () => {
                    // ---Parte extraida de la grabación
                    cy.get("#vext-gen1084 div.m-promos__pagination").click();
                    cy.get("#vext-gen1084 a.s-angle-right").click();
                    cy.get("#vext-gen1084 a.s-angle-right").click();
                    cy.get("#vext-gen1084 a.s-angle-right").click();
                    cy.get("#vext-gen1084 a.s-angle-right").click();
                    cy.get("#\\31 78075").click();
                    cy.get("div.m-promo-sheet__content > p").click();

                    // se agrega un should() para validar la prueba.
                    // Note que el ultimo click que se dio en la
                    // grabación es justamente este elemento.
                    cy.get("div.m-promo-sheet__content > p")
                        .should('have.text', 'Prepara tu viaje en trenes de alta velocidad a bajo precio');
                }
            });
        });
    });
});

// ---Grabación del navegador
// describe("vip-district-example", () => {
//     it("tests vip-district-example", () => {
//         cy.viewport(1382, 1203);
//         cy.visit("https://premgmt-comercial.cepsacorp.es/es/areaprivada/promociones/promo-vip-district");
//         // -- parte que se extrae para la plantilla ,
//         cy.get("#vext-gen1084 div.m-promos__pagination").click();
//         cy.get("#vext-gen1084 a.s-angle-right").click();
//         cy.get("#vext-gen1084 a.s-angle-right").click();
//         cy.get("#vext-gen1084 a.s-angle-right").click();
//         cy.get("#vext-gen1084 a.s-angle-right").click();
//         cy.get("#\\31 78075").click();
//         cy.get("div.m-promo-sheet__content > p").click();
//     });
// });
