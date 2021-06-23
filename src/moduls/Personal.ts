import * as $ from "jquery"
import Direction from "./position/Direction"


class Personal {

    static visible:boolean = false
    static origen:any = null 


    static init():void {
        
        $(".tips-ele").each((index:Number, ele:any) => {
            let evento:string = $(ele).data("evt")
            
            if( Personal.valEvent(evento) ) {
                $(ele).on("mouseenter", (e) => {
                    Personal.origen = e.target
                    if(Personal.evt(Personal.origen))
                        Personal.visible = true
                })
                $(ele).on("mouseleave", () => {
                    $(".tips").remove()
                    Personal.visible = false
                })
            } else {
                $(ele).on("click", (e)  => {
                    if(!Personal.visible) {
                        Personal.origen = e.target
                        if(Personal.evt(Personal.origen))
                            Personal.visible = true
                    }else {
                        $(".tips").remove()
                        Personal.visible = false
                    }
                })
            }
        })
    }

    static valEvent (evento:string) : boolean {
        return evento === "hover" || evento === undefined || evento === null
    }

    static valParam (info:string, pos:string, clase:string):boolean {
        return  (   info !== undefined  && info !== null  ) && 
                (   pos  !== undefined  && pos  !== null  ) &&
                (   clase !== undefined && clase !== null )
    }

    static evt (origen):boolean {
        let pos                  =   $(origen).data("position")
        let info                 =   $(origen).data("info")
        let clase                =   $(origen).data("class")
        let ele                  =   $(`<div class="${clase}">${info}</div>`)

        if(!Personal.valParam(info, pos, clase)) {
            console.error("Error en los parámetros ingresados revise los attr data")
            return
        }

        $("body").append(ele)
        Direction.posicionar(pos, origen, ele, false)
        $(ele).show()
    }
}

export default Personal