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
            // CÓDIGO
            cy.get(':nth-child(1) > .b-table-comments__header > .b-table-comments__order > :nth-child(1) > .s').click();
            cy.get(':nth-child(1) > .b-table-comments__header > .b-table-comments__order > :nth-child(2) > .s').click();
            // TALLER
            cy.get(':nth-child(2) > .b-table-comments__header > .b-table-comments__order > :nth-child(1) > .s').click();
            cy.get(':nth-child(2) > .b-table-comments__header > .b-table-comments__order > :nth-child(2) > .s').click();
            // TIPO
            cy.get(':nth-child(3) > .b-table-comments__header > .b-table-comments__order > :nth-child(1) > .s').click();
            cy.get(':nth-child(3) > .b-table-comments__header > .b-table-comments__order > :nth-child(2) > .s').click();
            // POBLACION
            cy.get(':nth-child(4) > .b-table-comments__header > .b-table-comments__order > :nth-child(1) > .s').click();
            cy.get(':nth-child(4) > .b-table-comments__header > .b-table-comments__order > :nth-child(2) > .s').click();

            // TOTAL
            cy.get(':nth-child(10) > .b-table-comments__header > .b-table-comments__order > :nth-child(1) > .s').click();
            cy.get(':nth-child(10) > .b-table-comments__header > .b-table-comments__order > :nth-child(2) > .s').click();
        });
    });
});
