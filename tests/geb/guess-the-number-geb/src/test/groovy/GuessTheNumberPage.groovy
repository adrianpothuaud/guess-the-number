import geb.Page

class GuessTheNumberPage extends Page {

    static at = { title == "Plus ou Moins ?" }

    static content = {
        actions { module(ActionsModule) }
        clues { module(CluesModule) }
        guess { module(GuessModule) }
        result { module(ResModule) }
        timeout { module(TimeoutModule) }
    }
}
