/// <reference types="cypress" />

context('Jeu du Nombre Mystère - v1', () => {

    beforeEach(() => {

        cy.visit('http://localhost:8080/')
    });

    it('Le jeu me demandes de deviner un nombre', () => {

        cy.queryAllByText('Devines le nombre mystère').should('exist')
    });

    it('Le jeu me demandes de deviner un nombre en 60 secondes', () => {

        cy.get('#timeoutBloc').within(() => {
            cy.findAllByText('60').should('exist')
        })
        cy.getMystery().should('be', 60);
    });

    it('Le jeu me demandes de deviner un nombre entre 0 et 100', () => {

        cy.get('#info').should('contain.text', 'C\'est entre 0 et 100');
    });

    it('Je peux recharger la partie', () => {

        cy.findAllByText('Recharger').should('be.visible');
        cy.findAllByText('Recharger').click();
    })





    it('Je peux abandonner la partie', () => {

        cy.findAllByText('Arreter').should('be.visible');
        cy.findAllByText('Arreter').click();
    })

});