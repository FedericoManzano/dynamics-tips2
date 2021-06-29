// JQUERY
import $ from "jquery"

// Dirección posicionamiento del elemento dinámico
import Direction from "./position/Direction"

/**
 * Clase que permite añadir elementos dinámicos 
 * personalizados a los elementos seleccionados
 */
class Personal {

    // Define si el elemento es visible o no 
    static visible = false

    // Elemento disparador del evento
    static origen = null 

    // Clase css que permite darle estilos 
    // al elemento dinámico
    static clase = null

    static init(cover) {
        
        // Recorrer todos los elementos dispradores dentro
        // de la página. En este caso dichos elementos 
        // contienen la clase .personal
        $(".personal").each((index, ele) => {
            
            // attr data-evt contiene el evento a ejecutar
            // este puede ser click o hover
            let evento = $(ele).data("evt")
            
            // Define que evento es el seleccionado
            if( Personal.valEvent(evento) ) {
                /**
                 * Esta sección de código es para el evento hover
                 * seleccionado.
                 */

                // mouseenter evento cuando el mouse
                // entra en el area del disparador
                $(ele).on("mouseenter", (e) => {

                    // Configuro el elemento origen 
                    // como attr de clase Personal
                    Personal.origen = e.target

                    // Si se lleva a cabo el evento 
                    // el objeto dinámico está presente
                    // caso contrario no es visible
                    if(Personal.evt(Personal.origen))
                        Personal.visible = true
                })

                /**
                 * Evento cuando el cursor sale del 
                 * area del disparador
                 */
                $(ele).on("mouseleave", () => {
                    // Remueve todos los elementos dinámicos
                    $("."+Personal.clase).remove()
                    Personal.visible = false
                })
            } else {
                /**
                 * Esta sección de código es para el evento click
                 * seleccionado.
                 */
                $(ele).on("click", (e)  => {
                    if(!Personal.visible) {
                        $("."+Personal.clase).remove()
                        Personal.origen = e.target
                        if(Personal.evt( Personal.origen )) {
                            Personal.visible = true
                            cover.show()
                        }
                            
                    }else {
                        $( "." + Personal.clase ).remove()
                        Personal.visible = false
                    }
                })

                $(".cover-drop").on("click", () => {
                    $("."+Personal.clase).remove()
                    Personal.visible = false 
                    cover.hide()
                })

                $(window).on("scroll", () => {
                    $( "."+Personal.clase ).remove()
                    if( Personal.visible ) 
                        Personal.evt( ele )
                })
    
                $(window).on("resize", () => {
                    $( "."+Personal.clase ).remove()
                    if( Personal.visible )  
                        Personal.evt( ele ) 
                })
            }

           
        })
    }

    static valEvent (evento) {
        return evento === "hover" || evento === undefined || evento === null
    }

    static valParam (info, pos, clase) {
        return  (   info !== undefined  && info !== null  ) && 
                (   pos  !== undefined  && pos  !== null  ) &&
                (   clase !== undefined && clase !== null )
    }

    static evt (origen) {


        Personal.clase           =   $(origen).data("class")
        let pos                  =   $(origen).data("position")
        let info                 =   $(origen).data("info")
        let ele                  =   $(`<div class="${ Personal.clase }">${info}</div>`)


        $( ele ).css("position",    "absolute")
        $( ele ).css("transform",   "translate(0)")
        $( ele ).css("transition",  "transform 0.3s ease")

        if( !Personal.valParam(info, pos, Personal.clase )) {
            console.error("Error en los parámetros ingresados revise los attr data")
            return false
        }

        $( "body" ).append(ele)
        Direction.posicionar( pos, origen, ele, false )
        $( ele ).show()
        return true
    }
}

export default Personal