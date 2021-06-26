import Position from "./Position";
import Offset   from "./Offset";

class LeftDirection  {
    static posicionar(origen, ele,mueca = false) {
        return Offset.ejecutar(origen, ele, Position.canLeft, Position.positionLeft, mueca, "mueca-arr")
    }
}

export default LeftDirection;