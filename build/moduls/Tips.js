"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const Direction_1 = require("./position/Direction");
class Tips {
    static init() {
        $(".tips-ele").on("mouseenter", (e) => {
            Tips.evt(e.target);
        });
        $(".tips-ele").on("mouseleave", () => {
            $(".tips").remove();
        });
    }
    static evt(origen) {
        let pos = $(origen).data("position");
        let info = $(origen).data("info");
        let tips = $(`<div class="tips">${info}</div>`);
        $("body").append(tips);
        Direction_1.default.posicionar(pos, origen, tips, false);
        $(tips).show();
    }
}
exports.default = Tips;
