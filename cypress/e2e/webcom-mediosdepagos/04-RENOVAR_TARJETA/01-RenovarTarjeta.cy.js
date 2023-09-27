
describe('PRUEBA_01 - CAMBIAR PÁGINA', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('WEBCOMCO2', 'prueba1234');

    });
    it('CONSULTAR INFORME', () => {

        cy.fixture('mediosDePagos').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL);
            cy.wait(17000);
            cy.get(':nth-child(2) > .b-cards__content > table > tbody > tr > .b-cards__toggle > .b-cards__toggle-button > .s').click();
            cy.get(':nth-child(2) > .b-cards__content > table > tbody > tr > .b-cards__links > .b-cards__links-container > :nth-child(2) > .link').click();
        });
    });
});



