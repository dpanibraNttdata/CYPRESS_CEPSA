describe('STEP01- 01-CARGA_DE_PANTALLA', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('VALIDACION CARGA DE PANTALLA SELECCION TIPO DE PEDIDO', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('.b-common-form__text1').should('include.text', 'Selecciona una de las siguientes opciones para iniciar tu pedido:');
                    cy.get('.b-common-form__actions__submit').should('be.disabled');
                }
            });
        });
    });
});
