import * as $ from "jquery"
import Direction from "./position/Direction"


class Tips {

    static visible:boolean = false
    static origen:any = null 


    static init():void {
        
        $(".tips-ele").on("mouseenter", (e) => {
            Tips.origen = e.target
            Tips.evt(Tips.origen)
            Tips.visible = true
        })
        $(".tips-ele").on("mouseleave", () => {
            $(".tips").remove()
            Tips.visible = false
        })

        $(window).on("scroll", (e) => {
            if(Tips.visible && Tips.origen !== null) {
                Tips.evt(Tips.origen)
            }
        })

        $(window).on("resize", (e) => {
            if(Tips.visible && Tips.origen !== null) {
                Tips.evt(Tips.origen)
            }
        })
    }

    static evt (origen):void {
        let pos     =   $(origen).data("position")
        let info    =   $(origen).data("info")
        let tips    =   $(`<div class="tips">${info}</div>`)
        $("body").append(tips)
        Direction.posicionar(pos, origen, tips, false)
        $(tips).show()
    }
}

export default Tips