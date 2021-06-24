"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const Direction_1 = require("./position/Direction");
class Dropdown {
    static init() {
        Dropdown.cla.forEach((ele) => {
            $(".dropdown-list-" + ele).hide();
        });
        $("body").append(`<div class="cover-drop"></div>`);
        $(".cover-drop").hide();
        $(".cover-drop").on("click", (e) => {
            $(".dropdown-trigger").children("span").remove();
            $(".dropdown-trigger").append(`<span class="dy-right"><span>`);
            Dropdown.cla.forEach((ele) => {
                $(".dropdown-list-" + ele).hide();
            });
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
            Dropdown.showDrop(elemento);
            Dropdown.position(elemento);
        }
        else
            Dropdown.hideDrop(elemento);
    }
    static hideDrop(ele) {
        $(ele).children("span").remove();
        $(ele).append(`<span class="dy-right"><span>`);
        $($(ele).data("target")).hide();
        $(".cover-drop").hide();
        Dropdown.visible = false;
    }
    static showDrop(ele) {
        $(ele).children("span").remove();
        $(ele).append(`<span class="dy-down"><span>`);
        $($(ele).data("target")).show();
        $(".cover-drop").show();
        Dropdown.visible = true;
    }
    static position(elemento) {
        let drop = $(elemento).data("target");
        let pos = $(elemento).data("position");
        if (pos === undefined || pos === null)
            Direction_1.default.posicionar("bottom", elemento, drop, false);
        else
            Direction_1.default.posicionar(pos, elemento, drop, false);
    }
    static destroy() {
        $(".cover-drop").off("click");
        $(".cover-drop").remove();
        $(".dropdown-trigger").off("click");
        $(".dropdown-trigger").each((ele, index) => {
            $($(ele).data("target")).remove();
        });
    }
}
Dropdown.visible = false;
Dropdown.TIME_EFECT = 150;
Dropdown.cla = [
    "gentle",
    "dark",
    "death",
    "cure",
    "toxic",
    "haven",
    "force",
    "fish",
    "grey"
];
exports.default = Dropdown;
