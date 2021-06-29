import $ from "jquery"
import Direction from "./position/Direction"

class Tips {


    static visible = false
    static origen = null 


    static init(cover) {
        
        $(".tips-ele").each((index, ele) => {
            let evento = $( ele ).data("evt")
            if( Tips.valEvent( evento ) ) 
                Tips.eventMouse( ele )
            else 
                Tips.eventClick( ele, cover )
            
        })
        $(".cover-drop").on("click", () => {
            $(".tips").remove()
            cover.hide()
        })
        $(window).on("scroll", (e) => {
            $(".tips").remove()
            if(Tips.visible && Tips.origen !== null) 
                Tips.evt( Tips.origen )
        })

        $( window ).on( "resize" , (e) => {
            $(".tips").remove()
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

    static eventClick (elemento, cover) {
        $(elemento).on("click", (e)  => {
            Tips.origen = e.target
            Tips.evt(Tips.origen)
            Tips.visible = true
            cover.show()
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