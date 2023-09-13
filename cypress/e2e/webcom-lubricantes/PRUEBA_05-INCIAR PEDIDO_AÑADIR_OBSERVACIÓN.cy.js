describe('PRUEBA_01 - CAMBIAR PÁGINA', () => {
    beforeEach(() => {
        // LOGIN SESSION ON PREMGMT
        cy.loginPREMGMT('lubrimartin', 'lubrimartin');

    });
    it('CONSULTAR INFORME', () => {

        cy.fixture('lubricantes').then((config) => {
            // ACCESSO AL WIDGET - WEBCOM-LUBRICANTES-ACCOUNTSTATUS
            cy.visit(config.URL);
            cy.wait(4000);
            //STE 0 SELECCIONAR OPCIÓN
            cy.get('ul > :nth-child(1) > label').click();
            cy.wait(1000);
            cy.get('.b-common-form__actions__submit').click();
            cy.wait(1000);

            // STEP 1 :COMPLETAR FORMULARIO
            cy.get('#reference').type('123456');
            cy.get('#supply_date').type('14/09/2023');

            cy.wait(2000);
            cy.get('input#delivery_address').click({ force: true });
            cy.wait(2000);
            cy.get('ul#ui-id-1').find('li').first().click();
            cy.wait(2000);
            cy.get('input#billing_address').click({ force: true });
            cy.get('ul#ui-id-1').find('li').first().click();

            cy.get('.b-common-form__actions__submit').click();

            //STEP 2 : COMPLETAMOS CANTIDAD DE PEDIDO
            cy.wait(2000);
            cy.get('.form__block > :nth-child(1) > .custom-select').select('Chevron/Texaco');
            cy.wait(2000);
            cy.get('.b-common-form__actions__submit').click();
            cy.wait(2000);

            cy.get(':nth-child(1) > :nth-child(5) > .d-flex > #order-amount').type('4')

            cy.get('tbody > :nth-child(1) > :nth-child(7) > a').click();
            cy.get(':nth-child(3) > :nth-child(5) > .d-flex > #order-amount').type('5')

            cy.get('tbody > :nth-child(3) > :nth-child(7) > a').click();
            cy.wait(2000);
            cy.get('tbody > :nth-child(1) > :nth-child(6) > a > .s').click();
            cy.wait(2000);
            cy.get('.modal__footer').click();
            //STEP3 RESUMEN
            cy.get('#summaryTable > .e-btn-primary').click();
            cy.wait(2000);
            cy.get('.cta-accordion__wrapper').click();

            cy.get('#add-observation').type('Añadimos observación');

            cy.get('.b-common-form__actions__submit').click(); // BOTÓN CONFIRMAR


        });
    });
});
