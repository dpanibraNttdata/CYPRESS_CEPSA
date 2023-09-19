describe('PRUEBA_01 - CAMBIAR PÁGINA', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('WEBCOMCO2', 'prueba1234');

    });
    it('CONSULTAR INFORME', () => {

        cy.fixture('detalleContrato').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL);
            cy.wait(7000);
            cy.get('#cmbContract').select('7825710014510 - StarRessa');

            cy.get('.mb0 > .e-btn-primary').click();
            cy.wait(4000);
            cy.get(':nth-child(2) > .details-wrapper > .details-header > .link').click();
            //PENDIENTE UTILIZAR OTP
        });
    });
});
