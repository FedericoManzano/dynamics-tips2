"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const Direction_1 = require("./position/Direction");
class Personal {
    static init() {
        $(".personal").each((index, ele) => {
            let evento = $(ele).data("evt");
            if (Personal.valEvent(evento)) {
                $(ele).on("mouseenter", (e) => {
                    Personal.origen = e.target;
                    if (Personal.evt(Personal.origen))
                        Personal.visible = true;
                });
                $(ele).on("mouseleave", () => {
                    $("." + Personal.clase).remove();
                    Personal.visible = false;
                });
            }
            else {
                $(ele).on("click", (e) => {
                    if (!Personal.visible) {
                        Personal.origen = e.target;
                        if (Personal.evt(Personal.origen))
                            Personal.visible = true;
                    }
                    else {
                        $("." + Personal.clase).remove();
                        Personal.visible = false;
                    }
                });
            }
        });
    }
    static valEvent(evento) {
        return evento === "hover" || evento === undefined || evento === null;
    }
    static valParam(info, pos, clase) {
        return (info !== undefined && info !== null) &&
            (pos !== undefined && pos !== null) &&
            (clase !== undefined && clase !== null);
    }
    static evt(origen) {
        let pos = $(origen).data("position");
        let info = $(origen).data("info");
        Personal.clase = $(origen).data("class");
        let ele = $(`<div class="${Personal.clase}">${info}</div>`);
        $(ele).css("position", "absolute");
        $(ele).css("transform", "translate(0)");
        $(ele).css("transition", "transform 0.3s ease");
        if (!Personal.valParam(info, pos, Personal.clase)) {
            console.error("Error en los parámetros ingresados revise los attr data");
            return;
        }
        $("body").append(ele);
        Direction_1.default.posicionar(pos, origen, ele, false);
        $(ele).show();
    }
}
Personal.visible = false;
Personal.origen = null;
Personal.clase = null;
exports.default = Personal;
