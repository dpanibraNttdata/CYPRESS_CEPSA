describe('PRUEBA_05 - EDITAR DATOS CONTACTO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('WEBCOMCO2', 'prueba1234');

    });
    it('EDITAR DATOS CONTACTO', () => {

        cy.fixture('detalleContrato').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL);
            cy.wait(7000);
            cy.get('#cmbContract').select('7825710014510 - StarRessa');

            cy.get('.mb0 > .e-btn-primary').click();
            cy.wait(4000);
            cy.get(':nth-child(4) > .details-wrapper > .details-header > .link').click();

            //LLAMAMOS AL OTP
            cy.get(':nth-child(3) > .b-common-form__blockchild > .b-common-form__blockchild--subtitle').click();
            cy.otp(":nth-child(3) > .form-control");
            cy.get('.b-common-form__actions__submit').click();
            //FIN  OTP
            
            cy.get('#contactName').clear();
            cy.get('#contactName').type('Prueba');
            cy.get('#starressa-form-18 > .b-common-form__actions > .b-common-form__actions__submit').click();
            cy.get('#starressa-form-18 > .b-common-form__actions > .b-common-form__actions__submit').click();
            cy.get('.footer > .e-btn-primary').click();

        });
    });
});

