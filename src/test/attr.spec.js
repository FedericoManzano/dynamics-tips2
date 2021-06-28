
const assert    = require("assert")
const expect    = require("chai")
const jsdom     = require("jsdom");
const { JSDOM } = jsdom;
const Dropdown  = require("../moduls/Dropdown")



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
            
                <link rel="stylesheet" href="https://raw.githack.com/FedericoManzano/bodystyle-2/master/dist/css/bodystyle.css">
                <link rel="stylesheet" href="../dist/css/dynamics.css">
                <title>Document</title>
            </head>
            <body>
        
                <div class="container mt-2">
                    <a href="#" class="dropdown-trigger btn-lg btn-force" data-target="#drop" data-position="right">Inicio</a>
                </div>
            
                
                <div id="drop" class="dropdown-list-dark ">
                    <ul class="list">
                        <li><a href="#">Porfolio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contratación</a></li>
                        <li><a href="#">Items</a></li>
                    </ul>
                </div>
            
            
                <div id="drop2" class="dropdown-list-dark ">
                    <ul class="list">
                        <li><a href="#">Porfolio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contratación</a></li>
                        <li><a href="#">Items</a></li>
                    </ul>
                </div>
            
            
                <script src="../dist/js/dynamics.js"></script>
                
                <script>
                    Dynamics.init()
                </script>
            </body>
            </html>
        `, features = {
            FetchExternalResources : ['script', 'css'],
            QuerySelector : true
        });
        
        global.window = dom.window
        global.document = dom.window.document
       
        const JQuery = require("jquery")(window)

        let origen = JQuery(".dropdown-trigger")


    it('Test validar Target', function() {
        var assert = expect.assert;
        assert.equal("#drop", JQuery(origen).data("target"))
    })

})

