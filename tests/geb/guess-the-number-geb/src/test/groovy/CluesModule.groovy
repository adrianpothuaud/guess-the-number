import geb.Module

class CluesModule extends Module {

    static content = {
        root { $("#cluesBloc") }
        infoP { $("#info") }
        lessP { $("#less") }
        moreP { $("#more") }
        okP { $("#ok") }
        nokP { $("#nok") }
    }
}