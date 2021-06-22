"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
require("mocha");
const app_1 = require("../app");
describe('Test de configuración de pruebas unitarias', function () {
    it('Prueba de equal del mensaje de app', function () {
        assert.equal("Esta es una prueba de los test uitarios", app_1.default.start());
    });
});
