import App from "../build/app"

(function() {

    /*************************************************************
     * Funciones para inicializar y destruir el drop
     */
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
            App.drop()
            App.tips()
            App.comment()
            App.personal()
        },
        destroy: () => {
            App.dropDestroy()
        }
    }

    window.Dynamics = Dynamics
})()

export default Dynamics