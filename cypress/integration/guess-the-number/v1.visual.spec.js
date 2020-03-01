/// <reference types="cypress" />

context('[Ft02] Jeu du Nombre Mystère - VISUEL - v1', () => {

    beforeEach(() => {

        cy.visit('http://localhost:8080/')
    });

    it('[Sp14] Le jeu par défaut a le même look', () => {

        cy.compareSnapshot('default', 0.0);
    });

    it('[Sp15] Le jeu gagné a le même look', () => {

        cy.youWin();
        cy.compareSnapshot('gagné', 0.0);
    });

    it('[Sp16] Le jeu perdu a le même look', () => {

        cy.gameOver();
        cy.compareSnapshot('perdu', 0.0);
    });

    it('[Sp17] Le jeu après nombre saisie trop petit a le même look', () => {

        cy.tooLow();
        cy.compareSnapshot('trop-petit', 0.0);
    });

    it('[Sp18] Le jeu après nombre saisie trop grand a le même look', () => {

        cy.tooHigh();
        cy.compareSnapshot('trop-grand', 0.0);
    });

});