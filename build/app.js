"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dropdown_1 = require("../build/moduls/Dropdown");
const Tips_1 = require("../build/moduls/Tips");
const Comment_1 = require("../build/moduls/Comment");
const Personal_1 = require("../build/moduls/Personal");
class App {
    constructor() {
    }
    static start() {
        return "Esta es una prueba de los test uitarios";
    }
    static drop() {
        Dropdown_1.default.init();
    }
    static dropDestroy() {
        Dropdown_1.default.destroy();
    }
    static tips() {
        Tips_1.default.init();
    }
    static comment() {
        Comment_1.default.init();
    }
    static personal() {
        Personal_1.default.init();
    }
}
exports.default = App;
