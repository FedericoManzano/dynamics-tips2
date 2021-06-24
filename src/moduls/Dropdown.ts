// Importa JQUERY
import * as $ from "jquery"

/** @see src/moduls/Direction.ts */
import Direction from "./position/Direction"


/**
 * Clase Drop para mostrar un listado dinamico 
 * cerca de un objeto disparador.
 */
class Dropdown {

    // Drop visible = true no visible = false
    static visible : boolean = false

    // Tiempo que tarda el efecto para mostrar el drop
    static TIME_EFECT : Number = 150 
    
    // Listado de clases con 
    // los diferentes colores de drop
    static clases:string[] = [
        "gentle",
        "dark",
        "death",
        "cure",
        "toxic",
        "haven",
        "force",
        "fish",
        "grey"
    ];


    static init():void {

        
        // Capa invisible que cubre todo el documento
        // Cuando el drop está activo y esta capa es presionada 
        // el drop desaparece
        $("body").append(`<div class="cover-drop"></div>`)
        $(".cover-drop").hide()


        $(".cover-drop").on("click", (e) => {

            // Flecha por defecto
            // cada disparador posee 2 estados de flechas
            // segun el estado del drop
            // por defecto es hacia la derecha
            $(".dropdown-trigger").children("span").remove()
            $(".dropdown-trigger").append(`<span class="dy-right"><span>`) 


            // Desaparece todos los drop cualquiera sea la clase 
            // que posean para definir el color del mismo
            Dropdown.clases.forEach((ele:any) => {
                $(".dropdown-list-"+ele).hide (Dropdown.TIME_EFECT)
            })

            // Desaparece la capa y el drop
            $(e.target).hide()

            // Defino la bandera para saber si el drop 
            // es visible o no 
            // en este caso no.
            Dropdown.visible = false 
        })


        /**
         * Evento disparador 
         */
        $(".dropdown-trigger").each( (index, ele) => {
            $(ele).append(`<span class="dy-right"><span>`)
            $(ele).on("click", (e) => {
                if($(e.target).is("span")) 
                    Dropdown.handler($(e.target).parent())
                else 
                    Dropdown.handler($(e.target))
            })
        })

        $(window).on("resize", (e) => {
            $(".dropdown-trigger").each((index, ele) => {
                if(Dropdown.visible)
                    Dropdown.position(ele)
            })
        })

        $(window).on("scroll", (e) => {
            $(".dropdown-trigger").each((index, ele) => {
                if(Dropdown.visible)
                    Dropdown.position(ele)
            })
        })
    }

    static handler(elemento:any): void {
        if(!Dropdown.visible) {
            Dropdown.showDrop(elemento)
            Dropdown.position(elemento)
        } else 
            Dropdown.hideDrop(elemento)
        
    }

    static hideDrop (ele:any):void {
        $(ele).children("span").remove()
        $(ele).append(`<span class="dy-right"><span>`) 
        $($(ele).data("target")).hide(Dropdown.TIME_EFECT)
        $(".cover-drop").hide()
        Dropdown.visible = false 
    }

    static showDrop (ele:any):void {
        $(ele).children("span").remove()
        $(ele).append(`<span class="dy-down"><span>`) 
        $($(ele).data("target")).show(Dropdown.TIME_EFECT)
        $(".cover-drop").show()
        Dropdown.visible = true 
    }


    static position (elemento:any): void  {
        let drop    = $(elemento).data("target")
        let pos     = $(elemento).data("position")
        if( pos === undefined || pos === null ) 
            Direction.posicionar("bottom", elemento, drop, false)
        else 
            Direction.posicionar(pos, elemento, drop, false)
    }


    static destroy():void {
        $(".cover-drop").off("click")
        $(".cover-drop").remove()
        $(".dropdown-trigger").off("click")
        $(".dropdown-trigger").each( (ele:any, index) => {
            $( $( ele ).data("target") ).remove()
        })
    }
}

export default Dropdown