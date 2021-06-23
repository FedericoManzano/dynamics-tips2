import * as $ from "jquery"
import Direction from "./position/Direction"

class Comment {

    static visible:boolean = false
    static origen: any = null


    static init():void {
        
        $(".com").each((index, ele) => {
            let evento = $(ele).data("evt")
            if(evento === undefined && evento === null)
                evento = "hover"
            if(evento === "hover") {
                $(".com").on("mouseenter", (e) => {
                    Comment.event(e.target)
                })  
        
        
                $(".com").on("mouseleave", (e) => {
                    $(".comment").remove()
                })
            }else {
                $(ele).on("click", (e) => {
                    if(!Comment.visible) {
                        Comment.event(e.target)
                        Comment.visible = true
                    }else {
                        $(".comment").remove()
                        Comment.visible = false
                    }
                })
            }
        })

    }

    static event (origen:any):void {
        Comment.origen = origen
        let info    = $(Comment.origen).data("info")
        let pos     = $(Comment.origen).data("position")
        if(!Comment.valParam(info, pos)) {
            info = "Esto es un comentario"
            pos = "bottom"
        }
        let ele = $(`<div class="comment">${info}</div>`)
        $("body").append(ele)
        $(ele).show()
        Direction.posicionar(pos, Comment.origen,ele )
    }


    static valParam (info:string, pos:string):boolean {
        return  (   info !== undefined && info !== null ) && 
                (   pos !== undefined  && pos  !== null )
    }

    
}

export default Comment