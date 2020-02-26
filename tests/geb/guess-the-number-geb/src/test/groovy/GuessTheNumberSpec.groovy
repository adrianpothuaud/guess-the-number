import geb.spock.GebSpec

class GuessTheNumberSpec extends GebSpec {

    def mystery1, mystery2

    def "Le jeu m'acceuille avec la phrase 'devines le nombre mystère'"() {

        when:
        to GuessTheNumberPage

        then:
        guess.label.text().toLowerCase().contains("devines le nombre")
    }

    def "Le jeu me montre le temps restant"() {

        when:
        to GuessTheNumberPage

        then:
        timeout.timeoutP.isDisplayed()
    }

    def "Le jeu me laisse 60 secondes pour trouver le nombre mystère"() {

        when:
        to GuessTheNumberPage

        then:
        timeout.timeoutVal.text().contains("60")
    }

    def "Le jeu me donne un indice 'entre 1 et 100'"() {

        when:
        to GuessTheNumberPage

        then:
        clues.infoP.text().contains("c'est entre 0 et 100")
    }

    def "Quand je recharges le jeu, j'ai un nouveau timeout"() {

        given:
        to GuessTheNumberPage

        when:
        sleep(3000)

        then:
        page.refreshWaitFor {
            timeout.timeoutVal.text().contains("60")
        }
    }

    def "Quand je recharges le jeu, j'ai un nouveau nombre mystère"() {

        given:
        to GuessTheNumberPage
        mystery1 = result.getHiddenRes()

        when:
        to GuessTheNumberPage
        mystery2 = result.getHiddenRes()

        then:
        assert mystery1 != mystery2
    }

    def "Je peux abandonner la partie"() {

        given:
        to GuessTheNumberPage

        when:
        actions.stopBtn.click()

        then:
        assert clues.nokP.isDisplayed()
    }

    def "Si je proposes un nombre égal, alors je gagnes la partie"() {

        given:
        to GuessTheNumberPage
        mystery1 = result.getHiddenRes()

        when:
        guess.giveATry(mystery1)

        then:
        waitFor{
            clues.okP.isDisplayed()
        }
    }

    def "Si je proposes un nombre plus petit, alors j'ai un indice 'trop petit'"() {

        given:
        to GuessTheNumberPage
        mystery1 = result.getHiddenRes()
        while (mystery1 == 0) {
            to GuessTheNumberPage
            mystery1 = result.getHiddenRes()
        }
        mystery2 = mystery1 - 1

        when:
        guess.giveATry(mystery2)

        then:
        waitFor{
            clues.moreP.isDisplayed()
        }
    }

    def "Si je proposes un nombre plus grand, alors j'ai un indice 'trop petit'"() {

        given:
        to GuessTheNumberPage
        mystery1 = result.getHiddenRes()
        while (mystery1 == 100) {
            to GuessTheNumberPage
            mystery1 = result.getHiddenRes()
        }
        mystery2 = mystery1 + 1

        when:
        guess.giveATry(mystery2)

        then:
        waitFor {
            clues.lessP.isDisplayed()
        }
    }
}