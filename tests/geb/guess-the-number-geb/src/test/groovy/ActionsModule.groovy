import geb.Module

class ActionsModule extends Module {

    static content = {
        root { $("#actionsBloc") }
        reloadBtn { $("#reloadBtn") }
        stopBtn { $("#stopBtn") }
    }
}