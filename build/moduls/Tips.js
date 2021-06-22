"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const Direction_1 = require("./position/Direction");
class Tips {
    static init() {
        $(".tips-ele").on("mouseenter", (e) => {
            Tips.origen = e.target;
            Tips.evt(Tips.origen);
            Tips.visible = true;
        });
        $(".tips-ele").on("mouseleave", () => {
            $(".tips").remove();
            Tips.visible = false;
        });
        $(window).on("scroll", (e) => {
            if (Tips.visible && Tips.origen !== null) {
                Tips.evt(Tips.origen);
            }
        });
        $(window).on("resize", (e) => {
            if (Tips.visible && Tips.origen !== null) {
                Tips.evt(Tips.origen);
            }
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
Tips.visible = false;
Tips.origen = null;
exports.default = Tips;
