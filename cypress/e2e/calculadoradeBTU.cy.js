describe('Calculadora de BTU', () => {
  beforeEach(() => {
    cy.visit('https://a7833275c1tst-store.occa.ocs.oraclecloud.com')
    cy.window().should('have.property', 'document').its('readyState').should('eq', 'complete');
    cy.wait(5000)
    cy.get('#modalPrivacyPolicy-btn').click()
  });

  context('Validar carregamento da calculadora de BTU', () => {
    it('carregamento da pagina de calculadora de BTU', () => {
      cy.get('.btu-calc').click()
      cy.get('.frigelar-simple-title > .center').should('be.visible')
      cy.get('#wi300080-frigelar-simple-description-470010 > .frigelar-simple-description > .text-center').should('contain.text','Por que é importante calcular os BTUs')
      
  })
  })
})