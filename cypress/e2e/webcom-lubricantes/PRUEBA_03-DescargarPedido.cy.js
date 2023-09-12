
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
            cy.get(':nth-child(2) > label').click();
            cy.wait(1000);
            cy.get('#order_number').type('5611518296');
            cy.wait(1000);
            cy.get('.b-common-form__actions__submit').click();
            cy.wait(11000);

            // STEP 1 :COMPLETAR FORMULARIO
            cy.get('#supply_date').type('14/09/2023');
            cy.get('.b-common-form__actions__submit').click();

            //STEP 2 : COMPLETAMOS CANTIDAD DE PEDIDO
            cy.get('.b-common-form__actions__submit').click();
            cy.wait(2000);
            //STEP3 RESUMEN
            cy.get('#summaryTable > .e-btn-primary').click();
            cy.wait(2000);
            // STEP 3 CONFIRMAR PEDIDO
            cy.get('.b-common-form__actions__submit').click();
            cy.wait(2000);
            cy.get('.link').click();

            cy.wait(2000);
            cy.get('.footer > .e-btn-primary').click();

        });
    });
});
