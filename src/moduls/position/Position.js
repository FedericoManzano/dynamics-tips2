//const $ = require("jquery") 
import $ from "jquery"

/**
 * Clase Position
 * Define la posición de los elementos 
 * dinámicos en la pantalla localiza el elemento
 * disparador y define X Y del elemento dinámico
 */
class Position {

    /**
     * Retorna la posicón en X del elemento disparador
     * y configura dicha magnitud en el elemento dinámico
     * @param origin Elemento disparador
     * @param element Elemento dinamico
     * @returns Number posición X del elemento dinamico
     */
    static positionX  (origin, element) {
        var x = $(origin).offset().left
        $(element).css("left", x)
        return x
    }


    /**
     * Retorna la posicón en Y del elemento disparador
     * y configura dicha magnitud en el elemento dinámico
     * @param origin Elemento disparador
     * @param element Elemento dinamico
     * @returns Number posición Y del elemento dinamico
     */
    static positionY  (origin, element) {
        var y = $(origin).offset().top
        $(element).css("top", y)
        return y
    }

    /**
     * Verifica el limite inferior es suficientemente
     * amplio como para colocar el elemento en esta posición
     * si esto es cierto entonces lo coloca en esta 
     * posición caso contrario lo intenta hubicar arriba.
     * @param origin elemento disparador del evento
     * @param element elemrnto dinámico que se desea hubicar
     * @returns true / false
     */
    static canDown (origin, element) {
        
        // Altura total de la ventana visible 
        // o tapasa por el scroll
        const windowHeight = $(window).height()

        // espacio tapado por el scroll
        const wScrollTop = $(window).scrollTop() 

        // espacio entre el origen y el tope superior
        const origenOffsetTop = $(origin).offset().top

        // altura del elemento
        const origenHeight = $(origin).outerHeight()

        // altura del elemento dinámico
        const tipsHeight = $(element).outerHeight()

        /**
         * Si el alto total del la ventana + 
         * lo tapado por el scroll - (espacio entre el origen y el tope superior 
         * + altura del origen) -> espacio debajo del origen 
         * si este espacio es mayor a altura del elemento + 6 
         * entonces puede ir debajo caso contrario no.
         */
        return windowHeight + wScrollTop - 
                (origenOffsetTop + origenHeight)  
                                > tipsHeight + 6
    }


    /**
     * Verifica si el elemento puede ir arriba 
     * del elemento origen.
     * @param origin elemento origen
     * @param element elemento dinámico
     * @returns true / false
     */
    static canUp ( origin, element ) {
        // Offset por encima del elemento origen
        const offsetTopOrigen = $(origin).offset().top

        // Espacio consumido por el scroll
        const wScrollTop = $(window).scrollTop() 

        // altura del elemento dinámico
        const tipsHeight = $(element).outerHeight()

        /**
        * Espacio por encima del origen - espacio consumido por el scroll >
        * altura del elemento dinámico + 6
        */
        return offsetTopOrigen - wScrollTop >  tipsHeight + 6
    }


    /**
     * Verifica si el elemento dinámico puede ir a la derecha
     * de el elemto origen.
     * @param {*} origin 
     * @param {*} element 
     * @returns true / false
     */
    static canRight ( origin, element) {
        const windowWidth = $(window).width()
        const origenOffsetLeft = $(origin).offset().left
        const origenWidth = $(origin).width()
        const tipsWidth = $(element).width()
        return windowWidth - origenOffsetLeft - origenWidth - 80 > tipsWidth + 20
    }

    /**
     * Verifica si el elemento dinámico puede ir a la izquierda
     * de el elemto origen.
     * @param {*} origin 
     * @param {*} element 
     * @returns true / false
     */
    static canLeft  (origin, element) {
        return $(origin).offset().left > $(element).width() + 20
    }


    /**
     * Posicionar el elemento dinámico alineado con 
     * el elemento origen.
     * @param {*} origin 
     * @param {*} element 
     * @returns Posicion en X donde se coloca el elemento
     */
    static alignHorizontal (origin, element) {

        // Cuando el elemento origen no tiene el mismo ancho 
        // Que el elemento dinámico se calcula el corrimiento
        // para que ambos elementos queden el el mismo eje
        var corr = ($(origin).outerWidth() ) - $(element).outerWidth()
        return Position.positionX(origin,element) +  Math.round(corr / 2)
    }

    /**
     * Posicionar el elemento dinámico alineado con 
     * el elemento origen.
     * @param {*} origin 
     * @param {*} element 
     * @returns Posicion en Y donde se coloca el elemento
     */
    static alignVertical ( origin, element ){
        // Cuando el elemento origen no tiene el mismo alto 
        // Que el elemento dinámico se calcula el corrimiento
        // para que ambos elementos queden el el mismo eje
        var corr = $(origin).outerHeight()  - $(element).outerHeight()
        return Position.positionY(origin,element) + Math.round(corr / 2)
    }


    static limitLeft  ( element ) {
        const despIzq = $(element).offset().left
        return despIzq <= 0 ? despIzq*-1 : 0
    }

    static limitTop ( element  ) {
        const despArr = $(element).offset().top - $(window).scrollTop()
        return despArr <= 0 ? (despArr - 6)*-1 : 0
    }

    static limitRight  ( element  ) {
        const despDer = $(window).width() - $(element).offset().left - $(element).outerWidth()
        return despDer <= 0 ? Math.round((despDer - 6)) : 0
    }

    static positionTop (origin, ele, $) {
        $(ele).css("top", $(origin).offset().top - $(ele).outerHeight() - 5)
        $(ele).css("left",  Position.alignHorizontal(origin,ele))
        
        var di = Position.limitLeft(ele)
        var td = Position.limitRight(ele) 

      
        if(di !== 0) {
            $(ele).css("left",  Position.alignHorizontal(origin,ele) + di)
            td = 0
        }
         
        
        if(td !== 0)
            $(ele).css("left",  Position.alignHorizontal(origin,ele) + td )
        $(ele).css({transform: 'translateY(-10px)'})
    }


    static positionBottom (origen, ele)  {
        $(ele).css("top", $(origen).offset().top +$(origen).outerHeight() + 5)
        
        $(ele).css("left",  Position.alignHorizontal(origen,ele))

        var di = Position.limitLeft(ele)
        var td = Position.limitRight(ele) 


        if(di !== 0) {
            $(ele).css("left",  Position.alignHorizontal(origen,ele) + di)
            td = 0
        }
        if(td !== 0)
            $(ele).css("left",  Position.alignHorizontal(origen,ele) + td )
        $(ele).css({transform: 'translateY(10px)'})
    }

    static positionLeft (origen, ele) {
        $(ele).css("left", $(origen).offset().left - $(ele).width() - 25)
        $(ele).css("top", Position.alignVertical(origen,ele))
        var da = Position.limitTop(ele)
        if(da !== 0)
            $(ele).css("top", Position.alignVertical(origen,ele) + da)
        $(ele).css({transform: 'translateX(-10px)'})
    }

    static positionRight (origen, ele) {
        $(ele).css("left", $(origen).offset().left + $(origen).outerWidth() + 6)
        
        $(ele).css("top", Position.alignVertical(origen,ele) )
        var da = Position.limitTop(ele)
        if(da !== 0)
            $(ele).css("top", Position.alignVertical(origen,ele) + da)
        $(ele).css({transform: 'translateX(10px)'})
    }
}

export default Position

//module.exports = Position