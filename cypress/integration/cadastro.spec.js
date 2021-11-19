/// <reference types="cypress" />

describe('Cadastro', () => {

  // HOOKS
  // Antes ou depois de todos ou de cada teste
  // antes de cada teste: acessar a página

  beforeEach(() => {
    cy.visit('register');
  });

  // baseUrl + register 
  // https://demo.realworld.io/#/register

  it('Cadastro de usuário com credenciais válidas', () => {

    // RouteMatcher -> identificação da Rota
    // RouteHandler (opcional) -> manipulação da resposta

    cy.intercept({
      method: 'POST',
      pathname: '/api/users'
    }, {
      statusCode: 200,
      fixture: 'cadastro-sucesso'
    }).as('postUsers')

    // cy.visit('https://demo.realworld.io/#/register');

    cy.get('[ng-model$=username]').type('Test Cypress')
    cy.get('[ng-model$=email]').type('test@mail.com')
    cy.get('[ng-model$=password]').type('123456')

    cy.contains('button', 'Sign up').click()

    cy.wait('@postUsers')
    
    
  });

  it('Cadastro de usuário com e-mail já cadastrado', () => {
    cy.intercept({
      method: 'POST',
      pathname: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'cadastro-email-usado'
    }).as('postUsers')

    // cy.visit('https://demo.realworld.io/#/register');

    cy.get('[ng-model$=username]').type('Test Cypress')
    cy.get('[ng-model$=email]').type('test@mail.com')
    cy.get('[ng-model$=password]').type('123456')

    cy.contains('button', 'Sign up').click()

    cy.get('.error-messages').should('contain', 'email has already been taken')

    // 
    // 1. assercao do erro exibido na página
    // 2. mock usado no teste

  });

  it('Cadastro de usuário com username já cadastrado', () => {
    cy.intercept({
      method: 'POST',
      pathname: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'cadastro-username-usado'
    }).as('postUsers')

    // cy.visit('https://demo.realworld.io/#/register');

    cy.get('[ng-model$=username]').type('Test Cypress')
    cy.get('[ng-model$=email]').type('test@mail.com')
    cy.get('[ng-model$=password]').type('123456')

    cy.contains('button', 'Sign up').click()

    cy.get('.error-messages').should('contain', 'username has already been taken')

    // 
    // 1. assercao do erro exibido na página
    // 2. mock usado no teste

  });

});
  
  