"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const Direction_1 = require("./position/Direction");
class Comment {
    static init() {
        $(".com").on("mouseenter", (e) => {
            Comment.origen = e.target;
            let info = $(Comment.origen).data("info");
            let pos = $(Comment.origen).data("position");
            if (!Comment.valParam(info, pos)) {
                info = "Esto es un comentario";
                pos = "bottom";
            }
            let elemento = $(`<div class="comment">${info}</div>`);
            $("body").append(elemento);
            $(elemento).show();
            Direction_1.default.posicionar(pos, Comment.origen, elemento);
        });
        $(".com").on("mouseleave", (e) => {
            $(".comment").remove();
        });
    }
    static valParam(info, pos) {
        return (info !== undefined && info !== null) &&
            (pos !== undefined && pos !== null);
    }
}
Comment.visible = false;
Comment.origen = null;
exports.default = Comment;
