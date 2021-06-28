import $ from "jquery"


class Cover {
    static init () {
        $( "body" ).append($( "<div class='cover-drop'></div>" ))
        $( ".cover-drop" ).hide()
    }

    static show() {
        $( ".cover-drop" ).show()
    }

    static hide() {
        $( ".cover-drop" ).hide()
    }
}

export default Cover