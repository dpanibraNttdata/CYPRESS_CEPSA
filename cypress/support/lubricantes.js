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
 * Selecciona el tipo de pedido OM_REPEAT_ORDER
 * y agrega el número de pedido.
 *
 * @param {string} orderNum Número de pedido.
 */
export const passSelectRepeatOrder = (orderNum) => {
  cy.get('ul > :nth-child(2) > label').click();
  cy.get('#order_number').type(orderNum);
  cy.get('.b-common-form__actions__submit').click();
};

/**
 * Selecciona el tipo de pedido OM_REPEAT_ORDER
 * y agrega el número de pedido.
 *
 * @param {string} orderNum Número de pedido.
 */
export const passSelectFileOrder = () => {
  cy.get('ul > :nth-child(3) > label', { timeout: 20000 }).click();
  cy.get('#text_file').selectFile('assets/plantilla.xlsx');
  cy.get('.b-common-form__actions__submit').click();
};

/**
 * Completa el paso 1 de dirección de pedido.
 */
export const passStep01OrderAddress = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const formattedTomorrow = `${tomorrow.getDate().toString().padStart(2, '0')}/${(tomorrow.getMonth() + 1).toString().padStart(2, '0')}/${tomorrow.getFullYear()}`;

  cy.get('#reference', { timeout: 1000 }).type('123456');
  cy.get('#supply_date').type(formattedTomorrow);

  cy.get('input#delivery_address').click({ force: true });
  cy.get('ul#ui-id-1').find('li').first().click();

  cy.get('input#billing_address').click({ force: true });
  cy.get('ul#ui-id-1').find('li').first().click();

  cy.get('.b-common-form__actions__submit').click();
};

/**
 * Completa el paso 1 de dirección de pedido.
 */
export const passStep01RepeatOrder = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const formattedTomorrow = `${tomorrow.getDate().toString().padStart(2, '0')}/${(tomorrow.getMonth() + 1).toString().padStart(2, '0')}/${tomorrow.getFullYear()}`;

  cy.get('#supply_date', { timeout: 20000 }).type(formattedTomorrow);
  cy.get('.b-common-form__actions__submit').click({ multiple: true });
};

/**
 * LLenar el primer producto con la cantidad del parametro.
 *
 * @param {string} selectorInput Selector del input del producto.
 * @param {number} cant          Cantidad del producto.
 */
export const fillProduct = (selectorInput, cant) => {
  cy.get(`:nth-child(${selectorInput}) > :nth-child(5) > .d-flex > #order-amount`, { timeout: 20000 }).type(cant);
  cy.get(`tbody > :nth-child(${selectorInput}) > :nth-child(7) > a`).first().click()
};

const lubSupport = {
  passSelectOrderType,
  passSelectRepeatOrder,
  passStep01OrderAddress,
  passStep01RepeatOrder,
  fillProduct,
  passSelectFileOrder
};

export default lubSupport;
