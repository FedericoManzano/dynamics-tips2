
import Dropdown from "../build/moduls/Dropdown"
import Tips from "../build/moduls/Tips"
import Comment from "../build/moduls/Comment"


class App {

    constructor() {
        
    }
    static start () : string {
        return "Esta es una prueba de los test uitarios";
    }

    static drop () : any {
        Dropdown.init()
    }

    static tips () : any {
        Tips.init()
    }

    static comment (): any {
        Comment.init()
    }
}

export default App