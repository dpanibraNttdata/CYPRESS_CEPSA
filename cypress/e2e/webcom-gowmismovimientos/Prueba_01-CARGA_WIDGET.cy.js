describe("PRUEBA_01 - CARGA_WIDGET", () => {
  beforeEach(() => {
    // LOGIN SESSION ON PREMGMT
    cy.loginPREMGMT("webcomptv02", "prueba1234");
  });

  it("Validación de la carga del widget", () => {
    cy.fixture("gowMismovimientos").then((config) => {
      // ACCESSO AL WIDGET - WEBCOM-GOWMISMOVIMIENTOS
      cy.visit(config.URL, {
        onLoad: () => {
          //CERRAMOS MODAL
          cy.get(".fancybox-close-small", { timeout: 20000 }).click();
          cy.get(".tabs-container__link--active").click();

          cy.get(".false", { timeout: 20000 }).click();
          cy.get('.b-available-credit__title').should("have.text", "Saldo total");
        },
      });
    });
  });
});
