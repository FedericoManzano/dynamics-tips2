"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BottomDirection_1 = require("./BottomDirection");
const TopDirection_1 = require("./TopDirection");
const LeftDirection_1 = require("./LeftDirection");
const RightDirection_1 = require("./RightDirection");
class Direction {
    static posicionar(posicion, origen, ele, mueca = false) {
        let res = false;
        switch (posicion) {
            case "abajo":
                res = BottomDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = TopDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = LeftDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = RightDirection_1.default.posicionar(origen, ele, mueca);
                break;
            case "bottom":
                res = BottomDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = TopDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = LeftDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = RightDirection_1.default.posicionar(origen, ele, mueca);
                break;
            case "arriba":
                res = TopDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = BottomDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = LeftDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = RightDirection_1.default.posicionar(origen, ele, mueca);
                break;
            case "top":
                res = TopDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = BottomDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = LeftDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = RightDirection_1.default.posicionar(origen, ele, mueca);
                break;
            case "izquierda":
                res = LeftDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = RightDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = TopDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = BottomDirection_1.default.posicionar(origen, ele, mueca);
                break;
            case "left":
                res = LeftDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = RightDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = TopDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = BottomDirection_1.default.posicionar(origen, ele, mueca);
                break;
            case "derecha":
                res = RightDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = LeftDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = TopDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = BottomDirection_1.default.posicionar(origen, ele, mueca);
                break;
            case "right":
                res = RightDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = LeftDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = TopDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = BottomDirection_1.default.posicionar(origen, ele, mueca);
                break;
            default:
                res = BottomDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = TopDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = LeftDirection_1.default.posicionar(origen, ele, mueca);
                if (!res)
                    res = RightDirection_1.default.posicionar(origen, ele, mueca);
                break;
        }
    }
}
exports.default = Direction;
