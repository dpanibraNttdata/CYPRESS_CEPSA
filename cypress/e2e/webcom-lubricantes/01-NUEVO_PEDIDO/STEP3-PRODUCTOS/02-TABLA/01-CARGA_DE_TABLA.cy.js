describe('STEP03 - 02-TABLA - 01-CARGA_DE_TABLA', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');
    });

    // it('VALIDACION CARGA TABLA PRODUCTOS', () => {
    //     cy.fixture('lubricantes').then((config) => {
    //         // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
    //         cy.visit(config.URL, {
    //             onLoad: () => {
    //                 cy.get('ul > :nth-child(1) > label').click();
    //                 cy.get('.b-common-form__actions__submit').click();

    //                 cy.get('#reference').type('123456');
    //                 cy.get('#supply_date').type('21/09/2023');

    //                 cy.get('input#delivery_address').click({ force: true });
    //                 cy.get('ul#ui-id-1').find('li').first().click();

    //                 cy.get('input#billing_address').click({ force: true });
    //                 cy.get('ul#ui-id-1').find('li').first().click();

    //                 cy.get('.b-common-form__actions__submit').click();

    //                 cy.get('.b-common-form__actions__submit').click();

    //                 cy.get('.table > tbody > tr', { timeout: 20000 }).then(($lis) => {
    //                     expect($lis).to.have.length(777);
    //                 });
    //             }
    //         });
    //     });
    // });

    it('LLENAR TABLA PRODUCTOS', () => {
        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL, {
                onLoad: () => {
                    cy.get('ul > :nth-child(1) > label').click();
                    cy.get('.b-common-form__actions__submit').click();

                    cy.get('#reference').type('123456');
                    cy.get('#supply_date').type('21/09/2023');

                    cy.get('input#delivery_address').click({ force: true });
                    cy.get('ul#ui-id-1').find('li').first().click();

                    cy.get('input#billing_address').click({ force: true });
                    cy.get('ul#ui-id-1').find('li').first().click();

                    cy.get('.b-common-form__actions__submit').click();

                    cy.get('.b-common-form__actions__submit').click();

                    cy.get(':nth-child(1) > :nth-child(5) > .d-flex > #order-amount', { timeout: 20000 }).type(10);
                    cy.get('tbody > :nth-child(1) > :nth-child(7) > a').click();

                    cy.get(':nth-child(2) > :nth-child(5) > .d-flex > #order-amount').type(5);
                    cy.get('tbody > :nth-child(2) > :nth-child(7) > a').click();

                    cy.get(':nth-child(3) > :nth-child(5) > .d-flex > #order-amount').type(15);
                    cy.get('tbody > :nth-child(3) > :nth-child(7) > a').click();

                    cy.get(':nth-child(4) > :nth-child(5) > .d-flex > #order-amount').type(20);
                    cy.get('tbody > :nth-child(4) > :nth-child(7) > a').click();

                    cy.get('.cta-accordion--title').should('have.text', 'Total productos (4)');
                }
            });
        });
    });
});
