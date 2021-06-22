const assert = require("assert")
import "mocha"
import App from "../app"

describe('Test de configuración de pruebas unitarias', function() {
    it('Prueba de equal del mensaje de app', function() {
        assert.equal("Esta es una prueba de los test uitarios",App.start())
    })
})