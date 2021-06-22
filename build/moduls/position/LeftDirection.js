"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Position_1 = require("./Position");
const Offset_1 = require("./Offset");
class LeftDirection {
    static posicionar(origen, ele, mueca = false) {
        return Offset_1.default.ejecutar(origen, ele, Position_1.default.canLeft, Position_1.default.positionLeft, mueca, "mueca-arr");
    }
}
exports.default = LeftDirection;
