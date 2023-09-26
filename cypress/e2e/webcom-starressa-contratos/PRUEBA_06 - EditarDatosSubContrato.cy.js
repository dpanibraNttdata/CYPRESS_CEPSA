describe('PRUEBA_06 - EDITAR DATOS SUBCONTRATO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('WEBCOMCO2', 'prueba1234');

    });
    it('EDITAR DATOS SUBCONTRATO', () => {

        cy.fixture('detalleContrato').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL);
            cy.wait(7000);
            cy.get('#cmbContract').select('7825710014510 - StarRessa');

            cy.get('.mb0 > .e-btn-primary').click();
            cy.wait(4000);
            cy.get('.field-option > .link').click();

            //LLAMAMOS AL OTP

            cy.get(':nth-child(3) > .b-common-form__blockchild > .b-common-form__blockchild--subtitle').click();
            cy.otp(":nth-child(3) > .form-control");
            cy.get('.b-common-form__actions__submit').click();
            cy.get('#starressa-form-18 > .b-common-form__actions > .b-common-form__actions__submit').click();
            cy.get('#levelName').clear();
            cy.get('#levelName').type('CEPSA CARD, S.A.U.');
            cy.get('#starressa-form-18 > .b-common-form__actions > .b-common-form__actions__submit').click();
            cy.get('#starressa-form-18 > .b-common-form__actions > .b-common-form__actions__submit').click();
            cy.get('.footer > .e-btn-primary').click();


        });
    });
});

