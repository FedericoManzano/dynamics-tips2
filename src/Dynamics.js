import App from "../build/app"

(function() {


    const Dynamics = {
        init: () => {
            App.drop()
            App.tips()
        }
    }

    window.Dynamics = Dynamics
})()

export default Dynamics