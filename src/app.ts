
import Dropdown from "../build/moduls/Dropdown"
import Tips from "../build/moduls/Tips"
import Comment from "../build/moduls/Comment"
import Personal from "../build/moduls/Personal"
import Toast from "../build/moduls/Toast"


class App {

    constructor() {
        
    }
    static start () : string {
        return "Esta es una prueba de los test uitarios";
    }

    static drop () : any {
        Dropdown.init()
    }

    static dropDestroy () : any {
        Dropdown.destroy()
    }

    static tips () : any {
        Tips.init()
    }

    static comment (): any {
        Comment.init()
    }

    static personal (): any {
        Personal.init()
    }

    static toast(config = {}):any {
        Toast.show(config)
    }
}

export default App