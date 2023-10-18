describe("PRUEBA_02 - ORDENAR_MOVIMIENTOS", () => {
  beforeEach(() => {
    // LOGIN SESSION ON PREMGMT
    cy.loginPREMGMT("webcomptv02", "prueba1234");
  });

  it("VER MOVIMIENTOS", () => {
    cy.fixture("gowMismovimientos").then((config) => {
      // ACCESSO AL WIDGET - WEBCOM-GOWMISMOVIMIENTOS
      cy.visit(config.URL, {
        onLoad: () => {
          //CERRAMOS MODAL
          cy.get(".fancybox-close-small", { timeout: 20000 }).click();
          cy.get(".custom-select").select("Concepto");
          cy.get(".custom-select").select("Provincia");

          cy.get(".custom-select").select("Estación");
        },
      });
    });
  });
});
