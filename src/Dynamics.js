/**
* Dynamics Tips 2.0.0
* Repositorio: https://github.com/FedericoManzano/dynamics-tips2
* Author: Federico Manzano
*/

import App from "./app"

(function() {


    const initDrop = () => {
        App.drop()
    }

    const destroyDrop = () => {
        App.dropDestroy()
    }

    const Dynamics = {
        initDrop: () => {
            initDrop()
        },
        destroyDrop: () => {
            destroyDrop()
        },
        init: () => {
            App.cover()
            App.drop()
            App.tips()
            App.comment()
            App.personal()
            
        },
        destroy: () => {
            App.dropDestroy()
        },
        toast: (config = {}) => {
            App.toast(config)
        }
    }

    window.Dynamics = Dynamics
})()

export default Dynamics