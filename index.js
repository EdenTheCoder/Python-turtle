let width = document.getElementById("width");
let height = document.getElementById("height");
let canvas = document.getElementById("canvas");
let pen = document.getElementById("pen");
let make = document.getElementById("make");
let output = document.getElementById("output");
let arr = [];
function set() {
	console.log("set");
	let dots = document.getElementsByClassName("dot");
	while (dots.length != 0) {
		dots[0].remove();
	}
	arr = [];
	canvas.style.height = height.value + "px";
	canvas.style.width = width.value + "px";
}

class pos {
	x;
	y;
	pen;
	constructor(x, y, pen) {
		this.x = x;
		this.y = y;
		this.pen = pen;
	}
}

canvas.onclick = function (e) {
	const box = canvas.getBoundingClientRect();
	const xCenter = (box.left + box.right) / 2;
	const yCenter = (box.top + box.bottom) / 2;
	const xMouse = e.clientX;
	const yMouse = e.clientY;
	let dot = new pos(xMouse - xCenter, yCenter - yMouse, pen.checked);
	let el = document.createElement("div");
	el.className = "dot";
	el.style.top = yMouse + "px";
	el.style.left = xMouse + "px";
	if (!dot.pen) el.style.backgroundColor = "blue";
	document.body.appendChild(el);
	arr.push(dot);
	console.log(arr);
};

make.onclick = function (e) {
	let str = "";
	str += "import turtle\n";
	str += "screen = turtle.Screen()\n";
	str += `screen.screensize(${width.value}, ${height.value})\n`;
	str += "T = turtle.Turtle()\n";
	str += "T.up()\n";
	str += `T.setposition(${arr[0].x}, ${arr[0].y})\n`;
	str += "T.down()\n";
	for (let i = 1; i < arr.length; i++) {
		if (!arr[i].pen) str += "T.up()\n";
		if (!arr[i - 1].pen && arr[i].pen) str += "T.down()\n"; // Checks if the last 1 had pen up and if this 1 doesnt have it
		str += `T.setposition(${arr[i].x}, ${arr[i].y})\n`;
	}
	str += "turtle.mainloop()";
	output.innerText = str;
	console.log(str);
};

document.getElementById("url").onchange = function () {
	let elmt = document.getElementById("url");
	console.log(elmt.value);
	if (elmt.value != "") {
		canvas.style.backgroundImage = `url(${elmt.value})`;
	} else {
		canvas.style.backgroundImage = null;
	}
};
