const assert    = require("assert")
const expect    = require("chai")
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const Position  = require("../moduls/position/Position")



describe('Test para evaluar el resultado de las posiciones absolutas de los elementos', function() {
    const options = {
        contentType: "text/html",
    };
    

    const dom = new JSDOM(`
        <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- Link a los estilos necesarios para los componentes -->
            <link rel="stylesheet" href="https://rawcdn.githack.com/FedericoManzano/dynamics-tips2/4706bfa8fafeb28299cbe4021ed984a66301ce3d/dist/css/dynamics.css">
            <title>Hola Mundo</title>
        </head>
        <body>
            <h1 class="com" style="width:20%"
                data-position="bottom"
                data-info="Este es un tips de <strong>dynamics-tips2.0.0</strong>" data-evt="hover" data-class="clase">
            Hola Mundo
            </h1>

        </body>
        </html>

        `, features = {
            FetchExternalResources : ['script', 'css'],
            QuerySelector : true
        });
        
        global.window = dom.window
        global.document = dom.window.document
       
        const JQuery = require("jquery")(window)

        let origen = JQuery(".com")
        let ele = JQuery("<div class='comment'>Este es un com prueba</div>")


    it('Test positionX()', function() {
        let esperado = JQuery(".com").offset().left
        var assert = expect.assert;
        assert.equal(Position.positionX(origen, ele, JQuery))
    })

    it('Test positionY()', function() {
        var assert = expect.assert;
        assert.equal(0,Position.positionY(origen, ele, JQuery))
    })

    it('Test canDown Puede abajo', function() {
        var assert = expect.assert;
        assert.equal(false,Position.canDown(origen, ele, JQuery))
    })

    it('Test canDown Puede arriba', function() {
        var assert = expect.assert;
        assert.equal(false,Position.canUp(origen, ele, JQuery))
    })

    it('Test canDown Puede izquierda', function() {
        var assert = expect.assert;
        assert.equal(false,Position.canLeft(origen, ele, JQuery))
    })

    it('Test canDown Puede derecha', function() {
        var assert = expect.assert;
        assert.equal(false,Position.canRight(origen, ele, JQuery))
    })
})

