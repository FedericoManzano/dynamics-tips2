"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dropdown_1 = require("../build/moduls/Dropdown");
const Tips_1 = require("../build/moduls/Tips");
class App {
    constructor() {
    }
    static start() {
        return "Esta es una prueba de los test uitarios";
    }
    static drop() {
        Dropdown_1.default.init();
    }
    static tips() {
        Tips_1.default.init();
    }
}
App.drop();
App.tips();
exports.default = App;
