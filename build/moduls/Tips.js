"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const Direction_1 = require("./position/Direction");
class Tips {
    static init() {
        $(".tips-ele").on("mouseenter", (e) => {
            console.log("asdasd");
            let pos = $(e.target).data("position");
            let info = $(e.target).data("info");
            let origen = $(e.target);
            let tips = $(`<div class="tips">${info}</div>`);
            $("body").append(tips);
            Direction_1.default.posicionar(pos, origen, tips, false);
            $(tips).show();
        });
        $(".tips-ele").on("mouseleave", () => {
            $(".tips").remove();
        });
    }
}
exports.default = Tips;
