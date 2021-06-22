import App from "../build/app"

(function() {


    const Dynamics = {
        init: () => {
            App.drop()
            App.tips()
            App.comment()
        }
    }

    window.Dynamics = Dynamics
})()

export default Dynamics