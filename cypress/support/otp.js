/**
 * Llama a la web de sms, obtine su html y captura
 * el código OTP y lo ingresa en el input seleccionado.
 *
 * @param {string} inputOTP Selector del input donde se colocará el código OTP.
 */
Cypress.Commands.add('otp', (inputOTP) => {
  cy.wait(10000);
  cy.request("https://receive-smss.com/sms/34658193656/")
    .then((html) => {
      const optLine = html.body.match(/.*Starressa.*/);
      const boldText = optLine[0].match(/<b>\d+/);
      return boldText[0].match(/\d+/)[0];
    })
    .then((otp) => {
      cy.get(inputOTP).type(otp);
    });
});
