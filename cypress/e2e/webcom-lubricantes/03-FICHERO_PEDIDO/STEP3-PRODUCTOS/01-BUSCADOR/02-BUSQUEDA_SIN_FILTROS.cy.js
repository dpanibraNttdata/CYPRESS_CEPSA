import lubSupport from '../../../../../support/lubricantes';

describe('STEP03 -01-BUSCADOR - 02-BUSQUEDA_SIN_FILTROS', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('BUSQUEDA DE PRODUCTOS SIN FILTROS', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    lubSupport.passSelectFileOrder('');
                    lubSupport.passStep01RepeatOrder();

                    cy.get('.b-common-form__actions__submit', { timeout: 20000 }).click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado ');
                }
            });
        });
    });
});
