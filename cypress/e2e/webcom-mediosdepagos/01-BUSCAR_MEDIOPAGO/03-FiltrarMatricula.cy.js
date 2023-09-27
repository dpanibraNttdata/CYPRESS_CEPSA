

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
            cy.get('#card').type('TEST PAYTEF');
            cy.get('.b-common-form__actions').click();

        });
    });
});
