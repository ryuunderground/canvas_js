const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff",
];

let x_coord = 0;
let y_coord = 0;

function onClick(e) {
    x_coord = e.offsetX
    y_coord = e.offsetY
    ctx.moveTo(x_coord, y_coord)
}

function onMouse(e) {
    ctx.beginPath();
    ctx.moveTo(x_coord, y_coord);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}



canvas.addEventListener("mousemove", onMouse)
canvas.addEventListener("click", onClick)