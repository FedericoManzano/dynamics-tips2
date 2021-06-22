import * as $ from "jquery"
import Direction from "./position/Direction"

class Comment {

    static visible:boolean = false
    static origen: any = null


    static init():void {
        
        $(".com").on("mouseenter", (e) => {
            Comment.origen = e.target
            let info    = $(Comment.origen).data("info")
            let pos     = $(Comment.origen).data("position")

            if(!Comment.valParam(info, pos)) {
                info = "Esto es un comentario"
                pos = "bottom"
            }

            let elemento = $(`<div class="comment">${info}</div>`)
            $("body").append(elemento)
            $(elemento).show()

            Direction.posicionar(pos, Comment.origen,elemento )
        })  


        $(".com").on("mouseleave", (e) => {
            $(".comment").remove()
        })
        
    }


    static valParam (info:string, pos:string):boolean {
        return (info !== undefined && info !== null) && 
                (pos !== undefined && pos !== null)
    }

    
}

export default Comment