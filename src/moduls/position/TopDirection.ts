import Position from "./Position";
import Offset   from "./Offset";

class TopDirection  {
    static posicionar(origen, ele,mueca = false) {
        return Offset.ejecutar(origen, ele, Position.canUp, Position.positionTop, mueca, "mueca-arr")
    }
}

export default TopDirection;