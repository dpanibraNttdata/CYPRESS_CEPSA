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
            cy.get('.field-option > .link').click();

            //LLAMAMOS AL OTP

            cy.get(':nth-child(3) > .b-common-form__blockchild > .b-common-form__blockchild--subtitle').click();
            cy.request("https://receive-smss.com/sms/34658193656/")
                .then((html) => {
                    console.log("🚀 ~ file: testOTP.cy.js:37 ~ cy.request ~ html:", html);
                    const optLine = html.body.match(/.*Starressa.*/);
                    console.log(optLine);
                    const boldText = optLine[0].match(/<b>\d+/);
                    return boldText[0].match(/\d+/)[0];
                })
                .then((otp) => {
                    cy.get(":nth-child(3) > .form-control").type(otp);
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
});

