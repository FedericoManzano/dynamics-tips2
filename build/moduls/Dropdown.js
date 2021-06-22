"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const Direction_1 = require("./position/Direction");
class Dropdown {
    static init() {
        $("body").append(`<div class="cover-drop"></div>`);
        $(".cover-drop").hide();
        $(".cover-drop").on("click", (e) => {
            $(".dropdown-trigger").children("span").remove();
            $(".dropdown-trigger").append(`<span class="dy-right"><span>`);
            $(".dropdown-list-gentle").hide(150);
            $(".dropdown-list-dark").hide(150);
            $(".dropdown-list-death").hide(150);
            $(".dropdown-list-cure").hide(150);
            $(".dropdown-list-toxic").hide(150);
            $(".dropdown-list-haven").hide(150);
            $(".dropdown-list-force").hide(150);
            $(".dropdown-list-fish").hide(150);
            $(".dropdown-list-grey").hide(150);
            $(e.target).hide();
            Dropdown.visible = false;
        });
        $(".dropdown-trigger").each((index, ele) => {
            $(ele).append(`<span class="dy-right"><span>`);
            $(ele).on("click", (e) => {
                if ($(e.target).is("span"))
                    Dropdown.handler($(e.target).parent());
                else
                    Dropdown.handler($(e.target));
            });
        });
        $(window).on("resize", (e) => {
            $(".dropdown-trigger").each((index, ele) => {
                if (Dropdown.visible)
                    Dropdown.position(ele);
            });
        });
        $(window).on("scroll", (e) => {
            $(".dropdown-trigger").each((index, ele) => {
                if (Dropdown.visible)
                    Dropdown.position(ele);
            });
        });
    }
    static handler(elemento) {
        if (!Dropdown.visible) {
            $(elemento).children("span").remove();
            $(elemento).append(`<span class="dy-down"><span>`);
            Dropdown.visible = true;
            let drop = $(elemento).data("target");
            Dropdown.position(elemento);
            $(drop).show(150);
            $(".cover-drop").show();
        }
        else {
            $(elemento).children("span").remove();
            $(elemento).append(`<span class="dy-right"><span>`);
            Dropdown.visible = false;
            let drop = $(elemento).data("target");
            $(drop).hide(150);
            $(".cover-drop").hide();
        }
    }
    static position(elemento) {
        let drop = $(elemento).data("target");
        let pos = $(elemento).data("position");
        if (pos === undefined || pos === null)
            Direction_1.default.posicionar("bottom", elemento, drop, false);
        else
            Direction_1.default.posicionar(pos, elemento, drop, false);
    }
}
Dropdown.visible = false;
exports.default = Dropdown;
