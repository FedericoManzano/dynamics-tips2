import DireccionAbajo       from    "./BottomDirection"
import DireccionArriba      from    "./TopDirection"
import DireccionIzquierda   from    "./LeftDirection"
import DireccionDerecha     from    "./RightDirection"


/*const DireccionAbajo = require("./BottomDirection") 
const DireccionArriba = require("./TopDirection") 
const DireccionIzquierda = require("./LeftDirection") 
const DireccionDerecha = require("./RightDirection") */


class Direction {
    static posicionar (posicion, origen, ele, mueca = false) {
        let res = false
        switch(posicion) {
            case "abajo": 
                res =  DireccionAbajo.posicionar(origen, ele, mueca)
                if(!res) 
                    res =  DireccionArriba.posicionar(origen, ele, mueca)  
                if(!res) 
                    res =  DireccionIzquierda.posicionar(origen, ele, mueca) 
                if(!res) 
                    res =  DireccionDerecha.posicionar(origen, ele, mueca) 
            break
            case "bottom": 
                res =  DireccionAbajo.posicionar(origen, ele, mueca)
                if(!res) 
                    res = DireccionArriba.posicionar(origen, ele, mueca)  
                if(!res) 
                    res = DireccionIzquierda.posicionar(origen, ele, mueca) 
                if(!res) 
                    res = DireccionDerecha.posicionar(origen, ele, mueca) 
            break
            case "arriba": 
                res = DireccionArriba.posicionar(origen, ele, mueca)
                if(!res) 
                    res = DireccionAbajo.posicionar(origen, ele, mueca)  
                if(!res) 
                    res = DireccionIzquierda.posicionar(origen, ele, mueca) 
                if(!res) 
                    res = DireccionDerecha.posicionar(origen, ele, mueca) 
            break
            case "top": 
                res = DireccionArriba.posicionar(origen, ele, mueca)
                if(!res) 
                    res = DireccionAbajo.posicionar(origen, ele, mueca)  
                if(!res) 
                    res = DireccionIzquierda.posicionar(origen, ele, mueca) 
                if(!res) 
                    res = DireccionDerecha.posicionar(origen, ele, mueca) 
            break
            case "izquierda": 
                res = DireccionIzquierda.posicionar(origen, ele, mueca)
                if(!res) 
                    res = DireccionDerecha.posicionar(origen, ele, mueca)  
                if(!res) 
                    res = DireccionArriba.posicionar(origen, ele, mueca) 
                if(!res) 
                    res = DireccionAbajo.posicionar(origen, ele, mueca) 
            break
            case "left": 
                res = DireccionIzquierda.posicionar(origen, ele, mueca)
                if(!res) 
                    res = DireccionDerecha.posicionar(origen, ele, mueca)  
                if(!res) 
                    res = DireccionArriba.posicionar(origen, ele, mueca) 
                if(!res) 
                    res = DireccionAbajo.posicionar(origen, ele, mueca) 
            break
            case "derecha": 
                res = DireccionDerecha.posicionar(origen, ele, mueca)
                if(!res) 
                    res = DireccionIzquierda.posicionar(origen, ele, mueca)  
                if(!res) 
                    res = DireccionArriba.posicionar(origen, ele, mueca) 
                if(!res) 
                    res = DireccionAbajo.posicionar(origen, ele, mueca) 
            break
            case "right": 
                res = DireccionDerecha.posicionar(origen, ele, mueca)
                if(!res) 
                    res = DireccionIzquierda.posicionar(origen, ele, mueca)  
                if(!res) 
                    res = DireccionArriba.posicionar(origen, ele, mueca) 
                if(!res) 
                    res = DireccionAbajo.posicionar(origen, ele, mueca) 
            break
            default: 
                res =  DireccionAbajo.posicionar(origen, ele, mueca)
                if(!res) 
                    res = DireccionArriba.posicionar(origen, ele, mueca)  
                if(!res) 
                    res = DireccionIzquierda.posicionar(origen, ele, mueca) 
                if(!res) 
                    res = DireccionDerecha.posicionar(origen, ele, mueca) 
            break
        }
    }
}

export default Direction;
//module.exports = Direction