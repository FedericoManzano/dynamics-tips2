import App from "../build/app"

(function() {


    const Dynamics = {
        init: () => {
            App.drop()
            App.tips()
            App.comment()
            App.personal()
        }
    }

    window.Dynamics = Dynamics
})()

export default Dynamics