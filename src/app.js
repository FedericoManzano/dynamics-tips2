
import Dropdown from "./moduls/Dropdown"
import Tips from "./moduls/Tips"
import Comment from "./moduls/Comment"
import Personal from "./moduls/Personal"
import Toast from "./moduls/Toast"


class App {

    static start ()  {
        return "Esta es una prueba de los test uitarios";
    }

    static drop ()  {
        Dropdown.init()
    }

    static dropDestroy ()  {
        Dropdown.destroy()
    }

    static tips ()  {
        Tips.init()
    }

    static comment () {
        Comment.init()
    }

    static personal () {
        Personal.init()
    }

    static toast(config = {}) {
        Toast.show(config)
    }
}

export default App