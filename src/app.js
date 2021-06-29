
import Dropdown from "./moduls/Dropdown"
import Tips from "./moduls/Tips"
import Comment from "./moduls/Comment"
import Personal from "./moduls/Personal"
import Toast from "./moduls/Toast"
import Cover from "./moduls/cover/Cover"

class App {

    static start ()  {
        return "Esta es una prueba de los test uitarios";
    }

    static drop ()  {
        Dropdown.init(Cover)
    }

    static dropDestroy ()  {
        Dropdown.destroy()
    }

    static tips ()  {
        Tips.init(Cover)
    }

    static comment () {
        Comment.init(Cover)
    }

    static personal () {
        Personal.init(Cover)
    }

    static toast(config = {}) {
        Toast.show(config)
    }

    static cover () {
        Cover.init()
    }
}

export default App