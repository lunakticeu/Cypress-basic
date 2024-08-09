it('my first test', ()=> {
  cy.visit('https://www.automationexercise.com/')
  // selectors
  cy.contains('cart')
  cy.get('.fa-shopping-cart')
    .first()
  cy.get('.fa-shopping-cart')
    .eq(0)
})