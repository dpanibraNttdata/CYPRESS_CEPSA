describe("PRUEBA_03 - DETALLES_MOVIMIENTOS", () => {
  beforeEach(() => {
    // LOGIN SESSION ON PREMGMT
    cy.loginPREMGMT("webcomptv02", "prueba1234");
  });

  it("VER DETALLES DE MOVIMIENTOS", () => {
    cy.fixture("gowMismovimientos").then((config) => {
      // ACCESSO AL WIDGET - WEBCOM-GOWMISMOVIMIENTOS
      cy.visit(config.URL, {
        onLoad: () => {
          //CERRAMOS MODAL
          cy.get(".fancybox-close-small", { timeout: 20000 }).click();

          cy.get(".b-available-credit__title").should(
            "have.text",
            "Saldo total"
          );
          cy.get(":nth-child(8) > .link").click();

          cy.get(".modal_content_icon").click();
        },
      });
    });
  });
});
