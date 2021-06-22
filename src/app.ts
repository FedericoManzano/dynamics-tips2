
import Dropdown from "../build/moduls/Dropdown"


class App {

    constructor() {
        
    }
    static start () : string {
        return "Esta es una prueba de los test uitarios";
    }

    static drop () : any {
        Dropdown.init()
    }
}


App.drop()

export default App