let width = document.getElementById("width")
let height = document.getElementById("height")
let canvas = document.getElementById("canvas")

function set(){
    console.log("set")

    canvas.style.height = height.value + "px";
    canvas.style.width = width.value + "px";

}
