import $ from "jquery"
import Direction from "./position/Direction"

/**
 * 
 * 
 */
class Tips {

    // 
    static visible = false
    static origen = null 


    static init() {
        
        $(".tips-ele").each((index, ele) => {
            let evento = $( ele ).data("evt")
            if( Tips.valEvent( evento ) ) 
                Tips.eventMouse( ele )
            else 
                Tips.eventClick( ele )
        })

        $(window).on("scroll", (e) => {
            if(Tips.visible && Tips.origen !== null) 
                Tips.evt( Tips.origen )
        })

        $( window ).on( "resize" , (e) => {
            if(Tips.visible && Tips.origen !== null) 
                Tips.evt(Tips.origen)
        })
    }

    static eventMouse (elemento) {
        $( elemento ).on("mouseenter", ( e ) => {
            Tips.origen = e.target
            Tips.evt( Tips.origen )
        })
        $( elemento ).on("mouseleave", () => {
            $(".tips").remove()
        })
    }

    static eventClick (elemento) {
        $(elemento).on("click", (e)  => {
            if(!Tips.visible) {
                Tips.origen = e.target
                Tips.evt(Tips.origen)
                Tips.visible = true
            }else {
                $(".tips").remove()
                Tips.visible = false
            }
        })
    }

    static evt (origen) {
        let pos                 =   $(origen).data("position")
        let info                =   $(origen).data("info") === undefined 
                                            ? "Hola soy un tips" : $(origen).data("info")
        let tips                =   $(`<div class="tips">${info}</div>`)
        $("body").append(tips)
        Direction.posicionar(pos, origen, tips, false)
        $(tips).show()
    }

    static valEvent (evento) {
        return evento === "hover" || evento === undefined || evento === null
    }
}

export default Tips