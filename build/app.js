"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dropdown_1 = require("../build/moduls/Dropdown");
class App {
    constructor() {
    }
    static start() {
        return "Esta es una prueba de los test uitarios";
    }
    static drop() {
        Dropdown_1.default.init();
    }
}
App.drop();
exports.default = App;
