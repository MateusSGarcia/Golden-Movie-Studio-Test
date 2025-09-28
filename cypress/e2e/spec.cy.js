const email = `${Date.now()}@teste.com`;

describe('Fazer cadastro de campos aleatórios', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#signup-firstname').type(email)
  })
})