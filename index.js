let width = document.getElementById("width")
let height = document.getElementById("height")
let canvas = document.getElementById("canvas")

let make = document.getElementById("make")


function set(){
    console.log("set")

    canvas.style.height = height.value + "px";
    canvas.style.width = width.value + "px";

}

class pos{
    x;
    y;
    constructor(x , y){
        this.x = x;
        this.y = y;
    }
}


let arr = []

document.onclick = function(e){
    const box = element.getBoundingClientRect()
    const xCenter = (box.left + box.right) / 2
    const yCenter = (box.top + box.bottom) / 2
    const xMouse = e.pageX;
    const yMouse = e.pageY;
    const dot = pos(xCenter-xMouse,yCenter-yMouse);
    arr.push(dot);
}

make.onclick = function(e){
    let str = "";
    str += "import turtle\n"
    str += "T = turtle.Turtle()\n"
    for (let i = 0; i<arr.length; i++){
        str += `T.setposition(${arr[i].x}, ${arr[i].y})\n`
    }
    console.log(str)
}