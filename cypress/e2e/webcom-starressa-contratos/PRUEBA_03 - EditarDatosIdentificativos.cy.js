describe('PRUEBA_03 - EDITAR DATOS IDENTIFICATIVOS', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('WEBCOMCO2', 'prueba1234');

    });
    it('EDITAR DATOS IDENTIFICATIVOS', () => {

        cy.fixture('detalleContrato').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL);
            cy.wait(7000);
            cy.get('#cmbContract').select('7825710014510 - StarRessa');

            cy.get('.mb0 > .e-btn-primary').click();
            cy.wait(4000);
            cy.get(':nth-child(2) > .details-wrapper > .details-header > .link').click();

            //LLAMAMOS AL OTP
            cy.get(':nth-child(3) > .b-common-form__blockchild > .b-common-form__blockchild--subtitle').click();
            cy.otp(":nth-child(3) > .form-control");
            //FIN OTP

            cy.get('.b-common-form__actions__submit').click();
            // PASEO DE LA CASTELLANA 259A
            cy.get('#address').clear();

            cy.get('#address').type('Prueba');
            // MADRID
            cy.get('#city').clear();
            cy.get('#city').type('Peru');

            cy.get('#starressa-form-18 > .b-common-form__actions > .b-common-form__actions__submit').click();
            cy.get('#starressa-form-18 > .b-common-form__actions > .b-common-form__actions__submit').click();
            cy.get('.footer > .e-btn-primary').click();
        });
    });
});
