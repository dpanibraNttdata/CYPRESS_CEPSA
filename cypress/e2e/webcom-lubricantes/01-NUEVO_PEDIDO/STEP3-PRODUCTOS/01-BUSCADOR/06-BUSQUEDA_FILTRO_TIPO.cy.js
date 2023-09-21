import lubSupport from '../../../../../support/lubricantes';

describe('STEP03 - 01-BUSCADOR - 06-BUSQUEDA_FILTRO_TIPO', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    it('BUSQUEDA DE PRODUCTOS FILTRO - TIPO', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    lubSupport.passSelectOrderType(config.newOrderType);
                    lubSupport.passStep01OrderAddress();

                    cy.get(':nth-child(4) > .custom-select').should('be.disabled');

                    // value="B" ->BASES
                    // value="E" ->ENERGETICOS
                    // value="G" ->GRASAS
                    // value="L" ->TOTAL LUBRICANTES
                    // value="P" ->PARAFINAS
                    // value="Q" ->P.Q.A.
                    // value="X" ->VARIOS
                    // value="Z" ->ENVASES EMBALAJES

                    // BASES
                    cy.get(':nth-child(3) > .custom-select').select('BASES');
                    cy.get(':nth-child(4) > .custom-select').should('not.be.disabled');
                    cy.get(':nth-child(4) > .custom-select > option').then(($lis) => {
                        expect($lis).to.have.length(2);
                        cy.get(':nth-child(4) > .custom-select').select('BASES-BASES');
                        cy.get('.b-common-form__actions__submit').click();
                        cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 0 productos');
                    });

                    // ENERGETICOS
                    cy.get(':nth-child(3) > .custom-select').select('ENERGETICOS');
                    cy.get(':nth-child(4) > .custom-select').should('not.be.disabled');
                    cy.get(':nth-child(4) > .custom-select > option').then(($lis) => {
                        expect($lis).to.have.length(2);
                        cy.get(':nth-child(4) > .custom-select').select('ENERGETICOS-ENERGETICOS');
                        cy.get('.b-common-form__actions__submit').click();
                        cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 0 productos');
                    });

                    // GRASAS
                    cy.get(':nth-child(3) > .custom-select').select('GRASAS');
                    cy.get(':nth-child(4) > .custom-select').should('not.be.disabled');
                    cy.get(':nth-child(4) > .custom-select > option').then(($lis) => {
                        expect($lis).to.have.length(2);
                        cy.get(':nth-child(4) > .custom-select').select('GRASAS-GRASAS');
                        cy.get('.b-common-form__actions__submit').click();
                        cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 47 productos');
                    });

                    // TOTAL LUBRICANTES
                    cy.get(':nth-child(3) > .custom-select').select('TOTAL LUBRICANTES');
                    cy.get(':nth-child(4) > .custom-select').should('not.be.disabled');
                    cy.get(':nth-child(4) > .custom-select > option').then(($lis) => {
                        expect($lis).to.have.length(8);
                        cy.get(':nth-child(4) > .custom-select').select('INDUSTRIALES-INDUSTRIALES');
                        cy.get('.b-common-form__actions__submit').click();
                        cy.get('.results-orders--text', { timeout: 15000 }).should('include.text', 'Se han encontrado 248 productos');
                    });
                }
            });
        });
    });
});
