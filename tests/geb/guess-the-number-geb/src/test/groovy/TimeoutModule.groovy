import geb.Module

class TimeoutModule extends Module {

    static content = {
        root { $("#timeoutBloc") }
        timeoutP { $("#timeLeftText") }
        timeoutVal { $("#timeLeftValue") }
    }
}
