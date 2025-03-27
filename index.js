

function set(){
    let width = document.getElementById("width")
    let height = document.getElementById("height")
    let canvas = document.getElementById("canvas")

    canvas.style.height = height.innerText + "px";
    canvas.style.width = width.innerText + "px";

}
