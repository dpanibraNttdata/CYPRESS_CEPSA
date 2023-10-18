describe("PRUEBA_04 - PAGINACIÓN", () => {
  beforeEach(() => {
    // LOGIN SESSION ON PREMGMT
    cy.loginPREMGMT("webcomptv02", "prueba1234");
  });

  it("PAGINACIÓN", () => {
    cy.fixture("gowMismovimientos").then((config) => {
      // ACCESSO AL WIDGET - WEBCOM-GOWMISMOVIMIENTOS
      cy.visit(config.URL, {
        onLoad: () => {
          //CERRAMOS MODAL
          cy.get(".fancybox-close-small", { timeout: 20000 }).click();
          //CAMBIAR PÁGINA
          cy.get(".s-angle-right").click();
          cy.get(".s-angle-right").click();
        },
      });
    });
  });
});
