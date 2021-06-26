
//const Position = require("./Position") 
//const Offset = require("./Offset") 
import Position from "./Position";
import Offset   from "./Offset";

class BottomDirection  {
    static posicionar(origen, ele,mueca = false) {
        return Offset.ejecutar(origen, ele, Position.canDown, Position.positionBottom, mueca, "mueca-arr")
    }
}

export default BottomDirection;
//module.exports = BottomDirection