"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
class Position {
    static positionX(origin, element) {
        var x = $(origin).offset().left;
        $(element).css("left", x);
        return x;
    }
    static positionY(origin, element) {
        var y = $(origin).offset().top;
        $(element).css("top", y);
        return y;
    }
    static canDown(origin, element) {
        const windowHeight = $(window).height();
        const wScrollTop = $(window).scrollTop();
        const origenOffsetTop = $(origin).offset().top;
        const origenHeight = $(origin).outerHeight();
        const tipsHeight = $(element).outerHeight();
        return windowHeight + wScrollTop -
            (origenOffsetTop + origenHeight)
            > tipsHeight + 6;
    }
    static canUp(origin, element) {
        const offsetTopOrigen = $(origin).offset().top;
        const wScrollTop = $(window).scrollTop();
        const tipsHeight = $(element).outerHeight();
        return offsetTopOrigen - wScrollTop > tipsHeight + 6;
    }
    static canRight(origin, element) {
        const windowWidth = $(window).width();
        const origenOffsetLeft = $(origin).offset().left;
        const origenWidth = $(origin).width();
        const tipsWidth = $(element).width();
        return windowWidth - origenOffsetLeft - origenWidth - 80 > tipsWidth + 20;
    }
    static canLeft(origin, element) {
        return $(origin).offset().left > $(element).width() + 20;
    }
    static alignHorizontal(origin, element) {
        var corr = ($(origin).outerWidth()) - $(element).outerWidth();
        return Position.positionX(origin, element) + Math.round(corr / 2);
    }
    static alignVertical(origin, element) {
        var corr = $(origin).outerHeight() - $(element).outerHeight();
        return Position.positionY(origin, element) + Math.round(corr / 2);
    }
    static limitLeft(element) {
        const despIzq = $(element).offset().left;
        return despIzq <= 0 ? despIzq * -1 : 0;
    }
    static limitTop(element) {
        const despArr = $(element).offset().top - $(window).scrollTop();
        return despArr <= 0 ? (despArr - 6) * -1 : 0;
    }
    static limitRight(element) {
        const despDer = $(window).width() - $(element).offset().left - $(element).outerWidth();
        return despDer <= 0 ? Math.round((despDer - 6)) : 0;
    }
    static positionTop(origin, ele) {
        $(ele).css("top", $(origin).offset().top - $(ele).outerHeight() - 5);
        $(ele).css("left", Position.alignHorizontal(origin, ele));
        var di = Position.limitLeft(ele);
        var td = Position.limitRight(ele);
        if (di !== 0) {
            $(ele).css("left", Position.alignHorizontal(origin, ele) + di);
            td = 0;
        }
        if (td !== 0)
            $(ele).css("left", Position.alignHorizontal(origin, ele) + td);
        $(ele).css({ transform: 'translateY(-10px)' });
    }
    static positionBottom(origen, ele) {
        $(ele).css("top", $(origen).offset().top + $(origen).outerHeight() + 5);
        $(ele).css("left", Position.alignHorizontal(origen, ele));
        var di = Position.limitLeft(ele);
        var td = Position.limitRight(ele);
        if (di !== 0) {
            $(ele).css("left", Position.alignHorizontal(origen, ele) + di);
            td = 0;
        }
        if (td !== 0)
            $(ele).css("left", Position.alignHorizontal(origen, ele) + td);
        $(ele).css({ transform: 'translateY(10px)' });
    }
    static positionLeft(origen, ele) {
        $(ele).css("left", $(origen).offset().left - $(ele).width() - 25);
        $(ele).css("top", Position.alignVertical(origen, ele) + Position.limitTop(origen));
        $(ele).css({ transform: 'translateX(-10px)' });
    }
    static positionRight(origen, ele) {
        $(ele).css("left", $(origen).offset().left + $(origen).outerWidth() + 6);
        $(ele).css("top", Position.alignVertical(origen, ele) + Position.limitTop(origen));
        $(ele).css({ transform: 'translateX(10px)' });
    }
}
exports.default = Position;
