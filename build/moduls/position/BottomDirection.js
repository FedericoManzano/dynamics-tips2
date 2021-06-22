"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Position_1 = require("./Position");
const Offset_1 = require("./Offset");
class BottomDirection {
    static posicionar(origen, ele, mueca = false) {
        return Offset_1.default.ejecutar(origen, ele, Position_1.default.canDown, Position_1.default.positionBottom, mueca, "mueca-arr");
    }
}
exports.default = BottomDirection;
