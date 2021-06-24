import * as $ from "jquery"
import Direction from "./position/Direction"

/**
 * 
 * 
 */
class Tips {

    // 
    static visible:boolean = false
    static origen:any = null 


    static init():void {
        
        $(".tips-ele").each((index:Number, ele:any) => {
            let evento = $(ele).data("evt")
            
            if( Tips.valEvent(evento) ) {
                
                $( ele ).on("mouseenter", ( e ) => {
                    Tips.origen = e.target
                    Tips.evt( Tips.origen )
                    Tips.visible = true
                })
                $(ele).on("mouseleave", () => {
                    $(".tips").remove()
                    Tips.visible = false
                })
            } else {
                $(ele).on("click", (e)  => {
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
        let pos                 =   $(origen).data("position")
        let info                =   $(origen).data("info")
        let tips                =   $(`<div class="tips">${info}</div>`)
        $("body").append(tips)
        Direction.posicionar(pos, origen, tips, false)
        $(tips).show()
    }

    static valEvent (evento:string) : boolean {
        return evento === "hover" || evento === undefined || evento === null
    }
}

export default Tips