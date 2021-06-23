import * as $ from "jquery"
import Direction from "./position/Direction"

/**
 * Comentarios dinámicos para sitios web
 * se aplica a elementos de cualquier tipo
 * y cuando se ejecuta el evento seleccionado
 * aparece en pantalla un mensaje aclaratorio
 */
class Comment {

    // Elemento que define la visualización 
    // A través del evento click
    static visible:boolean = false

    // Elemento origen 
    static origen: any = null


    static init():void {
        
        $(".com").each((index, ele) => {

            // Levanta el tipo de evento seleccionado
            // data-evt="hover/click"
            // Por defecto es hover
            let evento:string = $( ele ).data("evt")
            
            // Valida que el evento sea hover
            // Caso contrario carga el evento click
            if( Comment.valEvent( evento ) ) {

                // Entrada del mouse al area del elemento
                // Clase .com para determinar que elementos llevan
                // Un Comentario dinámico
                $( ".com" ).on("mouseenter", ( e ) => Comment.event( e.target ))  

                // Salida del mouse
                $( ".com" ).on("mouseleave", () => $(".comment").remove())
            }else {
                $(ele).on("click", (e) => {
                    // Pregunta si es visible o no el 
                    // comentario
                    if( !Comment.visible ) {

                        // Carga el evento aparece el comentario
                        Comment.event( e.target )
                        Comment.visible = true
                    }else {

                        // Remueve el elemento dinámico
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


        Direction.posicionar( pos, Comment.origen, ele )
    }

    static valEvent (evento:string) : boolean {
        return evento === "hover" || evento === undefined || evento === null
    }

    static valParam (info:string, pos:string):boolean {
        return  (   info !== undefined  && info !== null ) && 
                (   pos  !== undefined  && pos  !== null )
    }

    static destroy():void {
        $(".com").off("mouseenter")
        $(".com").off("mouseleave")
        $(".com").off("click")
        $(".comment").remove()
    }
}

export default Comment