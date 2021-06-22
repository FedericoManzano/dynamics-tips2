import Position from "./Position";
import Offset   from "./Offset";

class RightDirection  {
    static posicionar(origen, ele,mueca = false) {
        return Offset.ejecutar(origen, ele, Position.canRight, Position.positionRight, mueca, "mueca-arr")
    }
}

export default RightDirection;