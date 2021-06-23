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

    /**
     * Ejecuta lacción del evento disparado
     * por el usuario
     * @param origen Elemento disparador del evento
     */
    static event (origen:any):void {

        // Configuro ele elemento 
        // disparador
        Comment.origen = origen

        // Levantar los datos de los atributos 
        // data del elemento disparador
        let info    = $(Comment.origen).data("info")
        let pos     = $(Comment.origen).data("position")

        /**
         * Validar la información proveniente de los 
         * attr data del elemento disparador
         */
        if(!Comment.valParam(info, pos)) {
            info = "Esto es un comentario"
            pos = "bottom"
        }


        // Creación del objeto dinámico
        let ele = $(`<div class="comment">${info}</div>`)
       
        // Agrego el elemento dinámico
        $( "body" ).append(ele)
        $( ele ).show()

        // Posiciono el objeto dinámico
        Direction.posicionar( pos, Comment.origen, ele )
    }

    /**
     * Validar el dato que corresponde al tipo de 
     * evento a atender.
     * @param evento tipo de evento hover / click
     * @returns true / false 
     */
    static valEvent (evento:string) : boolean {
        return evento === "hover" || evento === undefined || evento === null
    }


    /**
     * Método para validar si los datos proporcionados
     * a través del attr data son correctos.
     * @param info Información que se pretende mostrar
     * @param pos  Posición que ocupa el elemento dinámico
     * @returns true / false si los datos son correctos
     */
    static valParam (info:string, pos:string):boolean {
        return  (   info !== undefined  && info !== null ) && 
                (   pos  !== undefined  && pos  !== null )
    }


    /**
     * Metodo para destruir los eventos asignados
     * en memoria.
     */
    static destroy():void {
        $(".com").off("mouseenter")
        $(".com").off("mouseleave")
        $(".com").off("click")
        $(".comment").remove()
    }
}

export default Comment