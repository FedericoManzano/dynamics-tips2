"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const Position_1 = require("./Position");
class Offset {
    static ejecutar(origen, ele, metodoPreguntar, metodoPosicionar, mueca = false, clase) {
        if (metodoPreguntar(origen, ele)) {
            $(ele).css("left", Position_1.default.alignVertical(origen, ele));
            $(ele).css("top", Position_1.default.alignHorizontal(origen, ele));
            if (mueca) {
                let m = $("<span class=" + clase + "></span>");
                $(ele).append(m);
            }
            metodoPosicionar(origen, ele);
            return true;
        }
        return false;
    }
}
exports.default = Offset;
