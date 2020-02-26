import geb.Module

class ResModule extends Module {

    static content = {
        root { $("#resBloc") }
        resP { $("#resText") }
    }

    int getHiddenRes() {
        return getJs().exec("return mystery;").toString().toInteger()
    }
}