"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Position_1 = require("./Position");
const Offset_1 = require("./Offset");
class TopDirection {
    static posicionar(origen, ele, mueca = false) {
        return Offset_1.default.ejecutar(origen, ele, Position_1.default.canUp, Position_1.default.positionTop, mueca, "mueca-arr");
    }
}
exports.default = TopDirection;
