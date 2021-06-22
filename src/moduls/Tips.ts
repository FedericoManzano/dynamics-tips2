import * as $ from "jquery"
import Direction from "./position/Direction"


class Tips {
    static init():void {
        
        $(".tips-ele").on("mouseenter", (e) => {
            console.log("asdasd")
            let pos = $(e.target).data("position")
            let info = $(e.target).data("info")
            let origen = $(e.target)
            let tips = $(`<div class="tips">${info}</div>`)
            $("body").append(tips)
            Direction.posicionar(pos, origen, tips, false)
            $(tips).show()
        })
        $(".tips-ele").on("mouseleave", () => {
            $(".tips").remove()
        })
    }
}

export default Tips