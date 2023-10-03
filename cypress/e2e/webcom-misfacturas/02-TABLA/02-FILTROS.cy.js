describe('02-TABLA - 02-FILTROS', () => {
    it('Validación filtros de la tabla de resultados', () => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('webcomercial19', 'prueba1234');

        // CONFIGURACIONES DEL WIDGET
        cy.fixture('misfacturas').then((config) => {

            // ACCESSO AL WIDGET - WEBCOM-MISFACTURAS
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');
                    cy.get('#from-date').type('2022-02-22');
                    cy.get('#to-date').type('2022-05-20');
                    cy.get("#vext-gen1081 form > div.form-group > input").click();

                    cy.get(':nth-child(2) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(1) > .s').click();
                    cy.get(':nth-child(1) > [title="id"] > p').should('have.text', 'Ventas directas');
                    cy.get(':nth-child(2) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(2) > .s').click();
                    cy.get(':nth-child(1) > [title="id"] > p').should('have.text', 'Ventas directas');

                    cy.get(':nth-child(3) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(1) > .s').click();
                    cy.get(':nth-child(1) > [title="date"] > p').should('have.text', '1120485570');
                    cy.get(':nth-child(3) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(2) > .s').click();
                    cy.get(':nth-child(1) > [title="date"] > p').should('have.text', '1120404913');

                    cy.get(':nth-child(4) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(1) > .s').click();
                    cy.get(':nth-child(1) > [title="price"] > p').should('have.text', '19/05/2022');
                    cy.get(':nth-child(4) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(2) > .s').click();
                    cy.get(':nth-child(1) > [title="price"] > p').should('have.text', '22/02/2022');

                    cy.get(':nth-child(5) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(1) > .s').click();
                    cy.get(':nth-child(1) > [title="price"] > p').should('have.text', '19/05/2022');
                    cy.get(':nth-child(5) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(2) > .s').click();
                    cy.get(':nth-child(1) > [title="price"] > p').should('have.text', '22/02/2022');

                    cy.get(':nth-child(6) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(1) > .s').click();
                    cy.get('tbody > :nth-child(1) > :nth-child(6) > p').should('have.text', '56,592.27 €');
                    cy.get(':nth-child(6) > .results-table-wrapper__th > .results-table-wrapper__order > :nth-child(2) > .s').click();
                    cy.get('tbody > :nth-child(1) > :nth-child(6) > p').should('have.text', '3,391.5 €');
                }
            });
        });
    });
});
