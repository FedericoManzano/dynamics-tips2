// JQUERY
import $ from "jquery"



class Toast {
    static show(
        {html="Este es un toast", bg="red", color = "white", time=3000, classes = [] } = {}) {
       
        $(".toast").remove()

        let toast = $( `<div class='toast'>${html}</div>` )
        $( toast ).css( "background-color", bg )
        $( toast ).css( "color", color )

        classes.forEach(( c ) => $( toast ).addClass( c ) )

        $( "body" ).append(toast)
        $(toast).animate({
            top: 30
        }, 1500, () => {
            setTimeout(() => {
                $(toast).remove()
            },time)
        })
    }
}

export default Toast