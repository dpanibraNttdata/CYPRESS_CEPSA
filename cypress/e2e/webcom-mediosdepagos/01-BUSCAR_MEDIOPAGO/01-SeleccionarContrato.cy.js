
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
            cy.get('#contractmultiselect__combo-0 > .viewbar > .placeholder').click();
            cy.get('#contractmultiselect__combo-0 > .dropdown-menu > .items > :nth-child(2) > .custom-control-label').click();


        });
    });
});



