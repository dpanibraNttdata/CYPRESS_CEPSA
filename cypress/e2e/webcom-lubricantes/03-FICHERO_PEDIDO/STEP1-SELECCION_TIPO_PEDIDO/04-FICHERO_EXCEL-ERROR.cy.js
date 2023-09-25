describe('STEP01- 04-FICHERO_EXCEL-ERROR ', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('FICHERO EXCEL - ERROR', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('.b-common-form__actions__submit').should('be.disabled');
                    cy.get('ul > :nth-child(3) > label').click();
                    cy.get('ul > :nth-child(3) > input').should('be.checked').should('have.attr', 'value', 'OM_TEXT_FILE');
                    cy.get('#text_file').selectFile('assets/plantilla-error.xlsx');
                    cy.get('.b-common-form__actions__submit').should('be.disabled');
                }
            });
        });
    });
});
