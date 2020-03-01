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

describe('[Ft01] Jeu du Nombre Mystère - v1', () => {

    sizes.forEach((size) => {

        context(size, () => {

            beforeEach(() => {

                cy.viewport(size)

                cy.visit('http://localhost:8080/')
            });

            it('[Sp01] Le jeu me demandes de deviner un nombre', () => {

                cy.queryAllByText('Devines le nombre mystère').should('exist')
            });

            it('[Sp02] Le jeu me demandes de deviner un nombre en 60 secondes', () => {

                cy.get('#timeoutBloc').within(() => {
                    cy.findAllByText('60').should('exist')
                })
                cy.getMystery().should('be', 60);
            });

            it('[Sp03] Le jeu me demandes de deviner un nombre entre 0 et 100', () => {

                cy.get('#info').should('contain.text', 'C\'est entre 0 et 100');
            });

            it('[Sp04] Je peux recharger la partie', () => {

                cy.findAllByText('Recharger').should('be.visible');
                cy.findAllByText('Recharger').click();
            });

            it('[Sp05] Quand je recharge la partie, j\' ai un nouveau timeout', () => {

                cy.setTimeleft(20);

                cy.reload();

                cy.getTimeleft().should('be', 60);
            });

            it('[Sp06] Quand je recharge la partie, j\' ai un nouveau nombre mystère', () => {

                cy.setMystery(50);

                cy.reload();

                cy.getMystery().should('not.be', 50);
            });

            it('[Sp07] Je peux abandonner la partie', () => {

                cy.findAllByText('Arreter').should('be.visible');
                cy.findAllByText('Arreter').click();
            });

            it('[Sp08] Quand j\'abandonne la partie, je ne peux plus jouer', () => {

                cy.abandon();

                cy.get('#guessInput').should('not.be.enabled')
                cy.get('#submitBtn').should('not.be.enabled')

                cy.get('#stopBtn').should('not.be.visible');
            });

            it('[Sp09] Quand je proposes un nombre trop petit alors j\'ai l\'indice adéquat', () => {

                cy.tooLow();

                cy.get('#more').should('be.visible')
            });

            it('[Sp10] Quand je proposes un nombre trop grand alors j\'ai l\'indice adéquat', () => {

                cy.tooHigh();

                cy.get('#less').should('be.visible')
            });

            it('[Sp11] Quand je proposes le bon nombre alors j\'ai gagné la partie', () => {

                cy.youWin();

                cy.get('#ok').should('be.visible')
            });

            it('[Sp12] Quand j\'ai gagné la partie, je ne peux plus jouer', () => {

                cy.youWin();

                cy.get('#guessInput').should('not.be.enabled')
                cy.get('#submitBtn').should('not.be.enabled')

                cy.get('#stopBtn').should('not.be.visible');
            });

            it('[Sp13] Quand j\'ai perdu la partie, je ne peux plus jouer', () => {

                cy.gameOver();

                cy.get('#guessInput').should('not.be.enabled')
                cy.get('#submitBtn').should('not.be.enabled')

                cy.get('#stopBtn').should('not.be.visible');
            });

        });

    });

});