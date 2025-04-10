describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://a7833275c1tst-store.occa.ocs.oraclecloud.com')
    cy.window().should('have.property', 'document').its('readyState').should('eq', 'complete');
    cy.wait(5000)
    cy.get('#modalPrivacyPolicy-btn').click()
  });

  context('Validacao do login', () => {
    it('Criacao de conta para login pessoa física', () => {
      cy.intercept('POST', 'https://api-gateway-hml.frigelar.com.br/b2c/1.0/profile/recaptcha/', { statusCode: 200, body: { success: true } });

      function gerarEmail() {
        const valor = Math.random().toString(36).substring(2, 10);
        return `${valor}@teste.com`;
      }

      let email = gerarEmail()

      cy.get('.header-bottom > .icons > .user-welcome').click()
      cy.get('.paragraphThree > .primaryOutlineGreenBtn').click()
      cy.wait(1000)
      cy.get('#name').type('Teste')
      cy.wait(1000)
      cy.get('#surname').type('Cypress')
      cy.wait(1000)
      cy.get('#cpf').type('766184310-26')
      cy.wait(1000)
      cy.get('#birthDate').type('22/08/2001')
      cy.wait(1000)
      cy.get('#mobilePhone').type('51993391458')
      cy.wait(1000)
      cy.get(':nth-child(3) > .radio-container').click()
      cy.wait(1000)
      cy.get('#emailRegistration').type(email);
      cy.wait(1000)
      cy.get('#emailConfirmation').type(email);
      cy.wait(1000)
      cy.get('#passwordRegistration').type('Teste@123');
      cy.wait(1000)
      cy.get('#passwordConfirmation').type('Teste@123');
      cy.wait(1000)
      cy.get('.modal-footer > .row > .primaryBtn').click()
      }) 
    })
})
