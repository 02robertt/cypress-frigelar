describe('homepage', () => {
  beforeEach(() => {
    cy.visit('https://a7833275c1tst-store.occa.ocs.oraclecloud.com')
    cy.window().should('have.property', 'document').its('readyState').should('eq', 'complete');
    cy.wait(5000)
    cy.get('#modalPrivacyPolicy-btn').click()
  });

  context('Validar no header se o logo, barra de busca e menu exibem na página', () => {
    it('Verificacao do logo', () => {
      cy.get('.logo-desktop > a > img').should('be.visible')
  });

    it('Verificacao da barra de pesquisa', () => {
      cy.get('#search-input').should('be.visible')
    });

    it.only('Verificacao do menu', () => {
      cy.get('.top-items-list').should('be.visible')
      cy.get(':nth-child(2) > .dropdown-toggle').should('be.visible')
      cy.get(':nth-child(4) > .dropdown-toggle').should('be.visible')
      cy.get(':nth-child(6) > .dropdown-toggle').should('be.visible')
      cy.get(':nth-child(8) > .dropdown-toggle').should('be.visible')
      cy.get(':nth-child(10) > .dropdown-toggle').should('be.visible')
      cy.get(':nth-child(12) > .dropdown-toggle').should('be.visible')
      cy.get(':nth-child(14) > .dropdown-toggle').should('be.visible')
      cy.get(':nth-child(16) > .dropdown-toggle').should('be.visible')
      cy.get(':nth-child(18) > .dropdown-toggle').should('be.visible')
    });

    context('Validar o carrossel de banners principal', () => {
  
      it('Verificacao do botao direito de troca de banner do carrosel', () => {
        cy.get('#homeBannerNext').click()    
      });

      it('Verificacao do botao esquerdo de troca do banner do carrosel', () => {
        cy.get('#homeBannerPrev').click()
      });
    });
  
  });

  })