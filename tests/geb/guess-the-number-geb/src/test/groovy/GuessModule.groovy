import geb.Module

class GuessModule extends Module {

    static content = {
        root { $("#guessBloc") }
        label { $("#guessInputLabel") }
        input { $("#guessInput") }
        submit { $("#submitBtn") }
    }

    void giveATry(int number) {
        input.value(number)
        submit.click()
    }
}