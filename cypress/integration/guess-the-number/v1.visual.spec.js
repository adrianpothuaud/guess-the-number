/// <reference types="cypress" />

const sizes = [
    'ipad-2',
    'ipad-mini',
    'iphone-3',
    'iphone-4',
    'iphone-5',
    'iphone-6',
    'iphone-6+',
    'iphone-x',
    'iphone-xr',
    'macbook-11',
    'macbook-13',
    'macbook-15',
    'samsung-note9',
    'samsung-s10'
]

describe('[Ft02] Visuel du Nombre Mystère - v1', () => {

    sizes.forEach((size) => {

        beforeEach(() => {

            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }

            cy.visit('http://localhost:8080/')
        });

        it(`[Sp14] @${size}@ Le jeu par défaut a le même look`, () => {

            cy.compareSnapshot(`default${size}`, 0.0);
        });

        it(`[Sp15] @${size}@ Le jeu gagné a le même look`, () => {

            cy.youWin();
            cy.compareSnapshot(`gagné${size}`, 0.0);
        });

        it(`[Sp16] @${size}@ Le jeu perdu a le même look`, () => {

            cy.gameOver();
            cy.compareSnapshot(`perdu${size}`, 0.0);
        });

        it(`[Sp17] @${size}@ Le jeu après nombre saisie trop petit a le même look`, () => {

            cy.tooLow();
            cy.compareSnapshot(`trop-petit${size}`, 0.0);
        });

        it(`[Sp18] @${size}@ Le jeu après nombre saisie trop grand a le même look`, () => {

            cy.tooHigh();
            cy.compareSnapshot(`trop-grand${size}`, 0.0);
        });

    });

});