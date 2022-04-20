//Prevents zooming of the page
window.onkeydown = (event) => {
    const zoomKeys = ['+', '-', '=']
    if (!event.ctrlKey) {
        return
    }else{
        if (zoomKeys.includes(event.key)) {
            event.preventDefault()
        }
    }
}
document.addEventListener('wheel', (event) => {
    event.preventDefault()
},{passive:false})