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

Cypress.Commands.add('setTimeleft', (tl) => {
    cy.window().then((win) => {
        return win.timeLeft = tl
    })
})

Cypress.Commands.add('reload', () => {
    cy.get('#reloadBtn').click()
})

Cypress.Commands.add('abandon', () => {
    cy.get('#stopBtn').click()
})

Cypress.Commands.add('tooHigh', () => {
    cy.window().then((win) => {
        win.$('#guessInput').val(win.mystery + 1);
        win.$('#submitBtn').click();
    })
})

Cypress.Commands.add('tooLow', () => {
    cy.window().then((win) => {
        win.$('#guessInput').val(win.mystery - 1);
        win.$('#submitBtn').click();
    })
})

Cypress.Commands.add('youWin', () => {
    cy.window().then((win) => {
        win.youWin()
    })
})

Cypress.Commands.add('gameOver', () => {
    cy.window().then((win) => {
        win.gameOver()
    })
})