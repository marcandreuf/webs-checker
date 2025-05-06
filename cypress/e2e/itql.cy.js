describe('ITQualab Website Tests', () => {
  it('should load the homepage', () => {
    cy.visit('https://itqualab.com/')
    cy.get('body').should('be.visible')
  })

  it('should have functioning navigation links', () => {
    cy.visit('https://itqualab.com/')
    
    // Test navigation to key pages
    cy.contains('a', 'Home').click()
    cy.url().should('include', 'itqualab.com')
    
    cy.contains('a', 'Service').click()
    cy.url().should('include', '/#main-services')

    cy.contains('a', 'Add-ons').click()
    cy.url().should('include', '/#features')

    cy.contains('a', 'Pricing').click()
    cy.url().should('include', '/#pricing-section')

    cy.contains('a', 'Contact').click()
    cy.url().should('include', '/contact')
    

  })

  it('should allow downloading the open collab PDF')


})