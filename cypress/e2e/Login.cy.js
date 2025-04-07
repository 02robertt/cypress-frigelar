describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://a7833275c1tst-store.occa.ocs.oraclecloud.com')
    cy.window().should('have.property', 'document').its('readyState').should('eq', 'complete');
    cy.wait(5000)
    cy.get('#modalPrivacyPolicy-btn').click()
  });

  context('Validacao do login', () => {
    
    it('Criacao de conta para login pessoa física', () => {
      cy.get('.header-bottom > .icons > .user-welcome').click()
      cy.get('.paragraphThree > .primaryOutlineGreenBtn').click()

    });
  });
})