import * as $ from "jquery"
import Direction from "./position/Direction"


class Tips {
    static init():void {
        
        $(".tips-ele").on("mouseenter", (e) => {
            Tips.evt(e.target)
        })
        $(".tips-ele").on("mouseleave", () => {
            $(".tips").remove()
        })
    }

    static evt (origen):void {
        let pos = $(origen).data("position")
        let info = $(origen).data("info")
        let tips = $(`<div class="tips">${info}</div>`)
        $("body").append(tips)
        Direction.posicionar(pos, origen, tips, false)
        $(tips).show()
    }
}

export default Tips