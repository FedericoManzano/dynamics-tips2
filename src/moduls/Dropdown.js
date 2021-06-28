// Importa JQUERY
import $ from "jquery"

/** @see src/moduls/Direction.ts */
import Direction from "./position/Direction"


// TEST
//const $ = require("jquery") 
//const Direction = require("./position/Direction") 

/**
 * Clase Drop para mostrar un listado dinamico 
 * cerca de un objeto disparador.
 */
class Dropdown {

    // Drop visible = true no visible = false
    static visible = false
    static cover = null
    static cla = [
        "gentle",
        "dark"  ,
        "death" ,
        "cure"  ,
        "toxic" ,
        "haven" ,
        "force" ,
        "fish"  ,
        "grey"
    ]


    static init( cover ) {

        Dropdown.cover = cover

        // Listado de clases con 
        // los diferentes colores de drop
        Dropdown.cla.forEach((ele) => {
            $(".dropdown-list-"+ele).hide ()
        })


        $(".cover-drop").on("click", (e) => {

            // Flecha por defecto
            // cada disparador posee 2 estados de flechas
            // segun el estado del drop
            // por defecto es hacia la derecha
            $(".dropdown-trigger").children("span").remove()
            $(".dropdown-trigger").append(`<span class="dy-right"><span>`) 

            
            Dropdown.cla.forEach((ele) => {
                $(".dropdown-list-"+ele).hide ()
            })


            // Desaparece la capa y el drop
            Dropdown.cover.hide()

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

    static handler(elemento) {
        if(!Dropdown.visible) {
            Dropdown.showDrop(elemento)
            Dropdown.position(elemento)
        } else 
            Dropdown.hideDrop(elemento)
        
    }

    static hideDrop ( ele ) {
        $(ele).children("span").remove()
        $(ele).append(`<span class="dy-right"><span>`) 
        $($(ele).data("target")).hide()
        Dropdown.cover.hide()
        Dropdown.visible = false 
    }

    static showDrop (ele) {
        $( ele ).children("span").remove()
        $( ele ).append(`<span class="dy-down"><span>`) 
        $($(ele).data("target")).show()
        Dropdown.cover.show()
        Dropdown.visible = true 
    }


    static position (elemento)  {
        let drop = $(elemento).data("target")
        let pos  = $(elemento).data("position")
        if( pos === undefined || pos === null ) 
            Direction.posicionar("bottom", elemento, drop, false)
        else 
            Direction.posicionar(pos, elemento, drop, false)
    }


    static destroy() {
        $(".dropdown-trigger").off("click")
        $(".dropdown-trigger").each( ( ele, index ) => {
            $( $( ele ).data("target") ).remove()
        })
    }
}

export default Dropdown
//module.exports = Position