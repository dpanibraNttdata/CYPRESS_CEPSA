describe("PRUEBA_05 - USAR_SALDO", () => {
  beforeEach(() => {
    // LOGIN SESSION ON PREMGMT
    cy.loginPREMGMT("webcomptv02", "prueba1234");
  });

  it("USAR SALDO", () => {
    cy.fixture("gowMismovimientos").then((config) => {
      // ACCESSO AL WIDGET - WEBCOM-GOWMISMOVIMIENTOS
      cy.visit(config.URL, {
        onLoad: () => {
          //CERRAMOS MODAL
          cy.get(".fancybox-close-small", { timeout: 20000 }).click();
          //CAMBIAR PÁGINA
          cy.get(".b-available-credit__link").click();

          // DA ERROR PORQUE LA PAGINA A LA QUE SE REDIRECCIONA NO ESTA DISPONIBLE
        },
      });
    });
  });
});
