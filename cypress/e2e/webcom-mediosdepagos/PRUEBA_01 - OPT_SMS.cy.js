describe("PRUEBA_01 - OPT_SMS.cy.js", () => {
  beforeEach(() => {
    // LOGIN SESSION ON PREMGMT
    cy.loginPREMGMT("webcomstarressa", "prueba1234");
  });
  it("PRUEBA OTP", () => {
    cy.fixture("mediosDePagos").then((config) => {
      cy.visit(config.URL);
      cy.wait(24000);

      cy.get("div#multiselect__combo-0").click();
      cy.wait(2000);
      cy.get('div[name="9033360000535"] > .custom-control-label').click();
      cy.get(".mb0 > .e-btn-primary").click();
      cy.wait(14000);
      cy.get(":nth-child(1) > .toggle").click();
      cy.wait(2000);
      cy.get("select#management-input-0").select("23");
      cy.get(
        ":nth-child(2) > #test > .inner-content > .header-actions-management > .header-actions-management__inner > .e-btn-primary"
      ).click();
      cy.wait(2000);
      cy.get(":nth-child(3) > .b-common-form__blockchild").click();
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
        });
      // para el boton
      cy.get(
        "#starressa-form-33 > .b-common-form__actions > .b-common-form__actions__submit"
      ).click();
      cy.get('[style="display: inline-block;"]').click();
      // No muestra el sistema PIN
      cy.get(".footer > .e-btn-primary").click();
    });
  });
});
