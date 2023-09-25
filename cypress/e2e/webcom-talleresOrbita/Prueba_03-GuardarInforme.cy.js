describe('PRUEBA_01-FILTRO_TALLARES', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

    });
    it('CONSULTAR INFORME', () => {
        cy.fixture('talleresOrbita').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL);
            cy.wait(4000);
            cy.get('.b-table-simple__link > a').click();

            cy.get(':nth-child(3) > :nth-child(11) > .b-table-comments__comment > .s').click();
            cy.get('.visible > td > #txt-add-observation').type("Prueba de observación");
            cy.get('.visible > td > .e-btn-primary').click();
            cy.get('.b-ctas > .filled').click();
        });
    });
});
