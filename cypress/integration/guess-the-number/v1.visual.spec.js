/// <reference types="cypress" />

const sizes = [
    'ipad-2',
    'iphone-3',
    'iphone-6',
    'iphone-xr',
    'macbook-15',
    'samsung-note9',
    'samsung-s10'
]

describe('[Ft02] Visuel du Nombre Mystère - v1', () => {

    sizes.forEach((size) => {

        context(size, () => {

            beforeEach(() => {

                cy.viewport(size)

                cy.visit('http://localhost:8080/')
            });

            it('[Sp14] Le jeu par défaut a le même look', () => {

                cy.compareSnapshot(`default${size}`, 0.0);
            });

            it('[Sp15] Le jeu gagné a le même look', () => {

                cy.youWin();
                cy.compareSnapshot(`gagné${size}`, 0.0);
            });

            it('[Sp16] Le jeu perdu a le même look', () => {

                cy.gameOver();
                cy.compareSnapshot(`perdu${size}`, 0.0);
            });

            it('[Sp17] Le jeu après nombre saisie trop petit a le même look', () => {

                cy.tooLow();
                cy.compareSnapshot(`trop-petit${size}`, 0.0);
            });

            it('[Sp18] Le jeu après nombre saisie trop grand a le même look', () => {

                cy.tooHigh();
                cy.compareSnapshot(`trop-grand${size}`, 0.0);
            });

        });

    });

});