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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

require('cypress-commands');
import '@testing-library/cypress/add-commands'
import 'cypress-wait-until';


Cypress.Commands.add('getMystery', () => {
    cy.window().then((win) => {
        return win.mystery
    })
})

Cypress.Commands.add('getTimeleft', () => {
    cy.window().then((win) => {
        return win.timeLeft
    })
})

Cypress.Commands.add('setMystery', (mystery) => {
    cy.window().then((win) => {
        win.mystery = mystery
    })
})

Cypress.Commands.add('setTimeLeft', (tl) => {
    cy.window().then((win) => {
        return win.timeLeft = tl
    })
})