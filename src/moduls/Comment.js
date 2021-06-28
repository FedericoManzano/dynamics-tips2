import $ from "jquery"
import Direction from "./position/Direction"
import Position from "./position/Position"

/**
 * Comentarios dinámicos para sitios web
 * se aplica a elementos de cualquier tipo
 * y cuando se ejecuta el evento seleccionado
 * aparece en pantalla un mensaje aclaratorio
 */
class Comment {

    static cover
    static visible = false
    static init(cover) {
        Comment.cover = cover

        $( ".com" ).each((index, ele) => {
            let evento = $(ele).data("evt")

            if( evento === "hover" ) {
                $( ele ).on("mouseenter", ( e ) => {Comment.event( e.target ); Comment.visible = true }) 

                // Salida del mouse
                $( ele ).on("mouseleave", () => {$(".comment").remove(); Comment.visible = false })
               
            
            } else {
                $(ele).on("click", (e) => {
                    Comment.event(e.target)
                    Comment.cover.show()
                    Comment.visible = true
                })

                $(".cover-drop").on("click", (e) => {
                    // Remueve el elemento dinámico
                    $(".comment").remove()
                    Comment.cover.hide()
                    Comment.visible = false
                })

                $(window).on("resize", () => {
                    $(".comment").remove()
                    if(Comment.visible)
                        Comment.event(ele)
                })

                $(window).on("scroll", () => {
                    $(".comment").remove()
                    if(Comment.visible)
                        Comment.event(ele)
                })
            }
        })
    }

    /**
     * Ejecuta lacción del evento disparado
     * por el usuario
     * @param origen Elemento disparador del evento
     */
    static event (origen) {

        // Levantar los datos de los atributos 
        // data del elemento disparador
        let info    =   $(origen).data( "info" )
        let pos     =   $(origen).data( "position" )

        /**
         * Validar la información proveniente de los 
         * attr data del elemento disparador
         */
        if( !Comment.valParam( info, pos ) ) {
            info = "Esto es un comentario"
            pos = "bottom"
        }

        // Creación del objeto dinámico
        let ele = $(`<div class="comment">${info}</div>`)
   
        // Agrego el elemento dinámico
        $( "body" ).append( ele )
        $( ele ).show()

        // Posiciono el objeto dinámico
        Direction.posicionar( pos, origen, ele, false )
        
    }

    /**
     * Validar el dato que corresponde al tipo de 
     * evento a atender.
     * @param evento tipo de evento hover / click
     * @returns true / false 
     */
    static valEvent (evento) {
        return evento === "hover" || evento === undefined || evento === null
    }


    /**
     * Método para validar si los datos proporcionados
     * a través del attr data son correctos.
     * @param info Información que se pretende mostrar
     * @param pos  Posición que ocupa el elemento dinámico
     * @returns true / false si los datos son correctos
     */
    static valParam (info, pos) {
        return  (   info !== undefined  && info !== null ) && 
                (   pos  !== undefined  && pos  !== null )
    }


    /**
     * Metodo para destruir los eventos asignados
     * en memoria.
     */
    static destroy() {
        $(".com").off("mouseenter")
        $(".com").off("mouseleave")
        $(".com").off("click")
        $(".comment").remove()
    }
}

export default Comment