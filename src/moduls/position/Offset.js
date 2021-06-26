import * as $ from "jquery";
import Position from "./Position";


class Offset {
    static ejecutar( origen, ele, metodoPreguntar,metodoPosicionar, mueca = false, clase ) {
        if( metodoPreguntar(origen, ele) ) {
            $(ele).css("left",Position.alignVertical(origen,ele))
            $(ele).css("top",Position.alignHorizontal(origen,ele))
            if(mueca) {
                let m = $("<span class="+ clase + "></span>")
                $(ele).append(m)
            }
            metodoPosicionar(origen, ele)
            return true 
        }

        return false
    }
}

export default Offset