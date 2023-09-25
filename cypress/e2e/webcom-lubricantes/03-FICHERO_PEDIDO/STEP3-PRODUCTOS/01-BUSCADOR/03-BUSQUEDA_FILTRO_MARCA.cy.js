import lubSupport from '../../../../../support/lubricantes';

describe('STEP03 - 01-BUSCADOR - 03-BUSQUEDA_FILTRO_MARCA', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('BUSQUEDA DE PRODUCTOS FILTRO - MARCA', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    lubSupport.passSelectFileOrder('');
                    lubSupport.passStep01RepeatOrder();

                    cy.get('.form__block > :nth-child(1) > .custom-select', { timeout: 20000 }).select('Cepsa');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado ');

                    cy.get('.form__block > :nth-child(1) > .custom-select').select('Chevron/Texaco');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado ');

                    cy.get('.form__block > :nth-child(1) > .custom-select').select('Ertoil');
                    cy.get('.b-common-form__actions__submit').click();
                    cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado ');

                }
            });
        });
    });
});
