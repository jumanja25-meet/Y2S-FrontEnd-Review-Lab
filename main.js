function changeBackgroundColor (color) {
	document.body.style.backgroundColor = color ;


}


let currentColor = 'lightblue'

function changeBackgroundColor2() {
    if (currentColor === 'lightblue') {
        currentColor = 'purple'
    } else {
        currentColor = 'lightblue'
    }
    document.body.style.backgroundColor = currentColor
}
