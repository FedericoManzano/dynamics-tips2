"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const Direction_1 = require("./position/Direction");
class Tips {
    static init() {
        $(".tips-ele").each((index, ele) => {
            let evento = $(ele).data("evt");
            if (evento === undefined || evento === null)
                evento = "hover";
            if (evento === "hover") {
                $(ele).on("mouseenter", (e) => {
                    Tips.origen = e.target;
                    Tips.evt(Tips.origen);
                    Tips.visible = true;
                });
                $(ele).on("mouseleave", () => {
                    $(".tips").remove();
                    Tips.visible = false;
                });
            }
            else {
                $(ele).on("click", (e) => {
                    if (!Tips.visible) {
                        Tips.origen = e.target;
                        Tips.evt(Tips.origen);
                        Tips.visible = true;
                    }
                    else {
                        $(".tips").remove();
                        Tips.visible = false;
                    }
                });
            }
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
