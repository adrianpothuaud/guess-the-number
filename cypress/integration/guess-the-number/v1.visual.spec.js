/// <reference types="cypress" />

context('Jeu du Nombre Mystère - v1', () => {

    beforeEach(() => {

        cy.visit('http://localhost:8080/')
    });

    it('Le jeu par défaut a le même look', () => {

        cy.compareSnapshot('default', 0.0);
    });

    it('Le jeu gagné a le même look', () => {

        cy.youWin();
        cy.compareSnapshot('gagné', 0.0);
    });

    it('Le jeu perdu a le même look', () => {

        cy.gameOver();
        cy.compareSnapshot('perdu', 0.0);
    });

    it('Le jeu après nombre saisie trop petit a le même look', () => {

        cy.tooLow();
        cy.compareSnapshot('trop-petit', 0.0);
    });

    it('Le jeu après nombre saisie trop grand a le même look', () => {

        cy.tooHigh();
        cy.compareSnapshot('trop-grand', 0.0);
    });

});