/// <reference types="cypress" />
context('Aliasing', () => {
    beforeEach(() => {
      cy.visit('https://staging.devel.cashforce.io/#login')
    })
  
    it('click placeholders', () => {
      cy.get('input[placeholder=Workspace]').click().type("dada")
    })
})
  