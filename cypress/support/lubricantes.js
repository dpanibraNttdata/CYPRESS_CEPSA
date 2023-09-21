/**
 * Selecciona el tipo de pedido según el parametro orderType.
 *
 * @param {string} orderType Selector de Tipo de pedido.
 */
export const passSelectOrderType = (orderType) => {
  cy.get(orderType).click();
  cy.get('.b-common-form__actions__submit').click();
};

/**
 * Selecciona el tipo de pedido según el parametro orderType.
 */
export const passStep01OrderAddress = () => {
  cy.get('#reference', { timeout: 1000 }).type('123456');
  cy.get('#supply_date').type('21/09/2023');

  cy.get('input#delivery_address').click({ force: true });
  cy.get('ul#ui-id-1').find('li').first().click();

  cy.get('input#billing_address').click({ force: true });
  cy.get('ul#ui-id-1').find('li').first().click();

  cy.get('.b-common-form__actions__submit').click();
};

/**
 * LLenar el primer producto con la cantidad del parametro.
 *
 * @param {string} selectorInput Selector del input del producto.
 * @param {number} cant          Cantidad del producto.
 */
export const fillProduct = (selectorInput, cant) => {
  cy.get(`:nth-child(${selectorInput}) > :nth-child(5) > .d-flex > #order-amount`, { timeout: 20000 }).type(cant);
  cy.get(`tbody > :nth-child(${selectorInput}) > :nth-child(7) > a`).click()
};

const lubSupport = { passSelectOrderType, passStep01OrderAddress, fillProduct };

export default lubSupport;
