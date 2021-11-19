// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// add -> adicionar 
// overwrite -> sobrescrever

import loginPayload from '../fixtures/login-request.json'

Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/users/login`,
    body: loginPayload
  }).then(response => {
    cy.log(response.body.user.token)

    const token = response.body.user.token

    window.localStorage.setItem('jwtToken', token)

  })
})