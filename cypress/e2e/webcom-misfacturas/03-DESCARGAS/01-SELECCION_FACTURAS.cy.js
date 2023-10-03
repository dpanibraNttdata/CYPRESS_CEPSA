describe('02-TABLA - 01-SELECCION_FACTURAS', () => {
    // it('Validación descarga factura', () => {
    //     // LOGIN SESSION ON PREMGMT
    //     cy.loginPREMGMT('webcomercial19', 'prueba1234');

    //     // CONFIGURACIONES DEL WIDGET
    //     cy.fixture('misfacturas').then((config) => {

    //         // ACCESSO AL WIDGET - WEBCOM-MISFACTURAS
    //         cy.visit(config.URL, {
    //             onLoad: () => {
    //                 cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');
    //                 cy.get('#from-date').type('2022-02-22');
    //                 cy.get('#to-date').type('2022-05-20');
    //                 cy.get("#vext-gen1081 form > div.form-group > input").click();

    //                 cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');
    //                 cy.get(':nth-child(1) > .download-link > a ').click();
    //             }
    //         });
    //     });
    // });

    // it('Validación descarga duplicado', () => {
    //     // LOGIN SESSION ON PREMGMT
    //     cy.loginPREMGMT('webcomercial19', 'prueba1234');

    //     // CONFIGURACIONES DEL WIDGET
    //     cy.fixture('misfacturas').then((config) => {

    //         // ACCESSO AL WIDGET - WEBCOM-MISFACTURAS
    //         cy.visit(config.URL, {
    //             onLoad: () => {
    //                 cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');
    //                 cy.get('#from-date').type('2022-02-22');
    //                 cy.get('#to-date').type('2022-05-20');
    //                 cy.get("#vext-gen1081 form > div.form-group > input").click();

    //                 cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');
    //                 cy.get(':nth-child(1) > .duplicate-link > a').click();
    //             }
    //         });
    //     });
    // });

    it('Validación descarga facturas', () => {
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

                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');
                    cy.get('.block-header-link > :nth-child(1)').click();
                }
            });
        });
    });

    it('Validación descarga duplicados', () => {
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

                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');
                    cy.get('.block-header-link > :nth-child(2)').click();
                }
            });
        });
    });

    it('Validación descarga duplicados', () => {
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

                    cy.get('.block-header-text', { timeout: 20000 }).should('have.text', 'Seleccionados (0)');
                    cy.get('.block-header-link > :nth-child(3)').click();
                }
            });
        });
    });
});
