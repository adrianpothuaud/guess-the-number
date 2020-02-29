/// <reference types="cypress" />

context('Jeu du Nombre Mystère - v1', () => {

    beforeEach(() => {

        cy.visit('http://localhost:8080/')
    });

    it('Le jeu par défaut a le même look', () => {

        cy.compareSnapshot('default', 0.0);
    });

});