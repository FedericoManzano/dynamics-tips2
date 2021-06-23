"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const Direction_1 = require("./position/Direction");
class Comment {
    static init() {
        $(".com").each((index, ele) => {
            let evento = $(ele).data("evt");
            if (evento === undefined && evento === null)
                evento = "hover";
            if (evento === "hover") {
                $(".com").on("mouseenter", (e) => {
                    Comment.event(e.target);
                });
                $(".com").on("mouseleave", (e) => {
                    $(".comment").remove();
                });
            }
            else {
                $(ele).on("click", (e) => {
                    if (!Comment.visible) {
                        Comment.event(e.target);
                        Comment.visible = true;
                    }
                    else {
                        $(".comment").remove();
                        Comment.visible = false;
                    }
                });
            }
        });
    }
    static event(origen) {
        Comment.origen = origen;
        let info = $(Comment.origen).data("info");
        let pos = $(Comment.origen).data("position");
        if (!Comment.valParam(info, pos)) {
            info = "Esto es un comentario";
            pos = "bottom";
        }
        let ele = $(`<div class="comment">${info}</div>`);
        $("body").append(ele);
        $(ele).show();
        Direction_1.default.posicionar(pos, Comment.origen, ele);
    }
    static valParam(info, pos) {
        return (info !== undefined && info !== null) &&
            (pos !== undefined && pos !== null);
    }
}
Comment.visible = false;
Comment.origen = null;
exports.default = Comment;
