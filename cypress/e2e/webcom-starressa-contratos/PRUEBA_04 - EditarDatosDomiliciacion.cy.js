describe('PRUEBA_04 - EDITAR DATOS DOMICILIO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('WEBCOMCO2', 'prueba1234');

    });
    it('EDITAR DATOS DOMICILIO', () => {

        cy.fixture('detalleContrato').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL);
            cy.wait(7000);
            cy.get('#cmbContract').select('7825710014510 - StarRessa');

            cy.get('.mb0 > .e-btn-primary').click();
            cy.wait(4000);

            cy.get(':nth-child(3) > .details-wrapper > .details-header > .link').click();

            //LLAMAMOS AL OTP
            cy.get(':nth-child(3) > .b-common-form__blockchild > .b-common-form__blockchild--subtitle').click();
            cy.otp(":nth-child(3) > .form-control");
            cy.get('.b-common-form__actions__submit').click();
            //FIN OTP


            //completamos datos de otp
            cy.get('#bankAccountHolder').clear();
            cy.get('#bankAccountHolder').type('Prueba');
            cy.get('#entityBankAccount').clear();
            cy.get('#entityBankAccount').type('Prueba');
            cy.get('#addressBankAccount').clear();
            cy.get('#addressBankAccount').type('Prueba');
            cy.get('#numberBankAccount').clear();
            cy.get('#numberBankAccount').type('12525142585247858412547');
            cy.get('#countryBankAccount').select('Andorra');
            cy.get('#starressa-form-18 > .b-common-form__actions > .b-common-form__actions__submit').click();
            cy.get('#starressa-form-18 > .b-common-form__actions > .b-common-form__actions__submit').click();
            cy.get('.footer > .e-btn-primary').click();


        });
    });
});

