/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit("login")
  });

  it('Autenticar com credenciais válidas', () => {
    

    cy.get("input[type=email]").type(Cypress.env('user')) 
    cy.get("input[type=password]").type(Cypress.env('pass')) 
    
    cy.contains('button', 'Sign in').click()

    cy.get('[href*=editor]').should('be.visible')
  });

  it('Autenticar com senha incorreta', () => {
    
  });

});

// ES6 Mocha Snippets

// Fira Code - Font Ligatures

// describe e context -> agrupadores
// it -> cenário

// Adicionar etapa de criar usuário antes de iniciar o teste
// curl 'https://api.realworld.io/api/users' \
//   --data-raw '{"user":{"email":"test_cypress@mail.com","password":"123456","username":"Test Cypress"}}' \

// cy.get('[class=error-messages]')
//   .should('be.visible')
//   .contains('email has already been taken')