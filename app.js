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

let isPainting = false

function onMove(e) {
    if (isPainting)
    {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(e.offsetX, e.offsetY);
}

function onMouseDown(e) {
    isPainting = true;
}
function canclePainting(e) {
    isPainting = false;
}

canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", onMouseDown)
canvas.addEventListener("mouseup", canclePainting)
canvas.addEventListener("mouseleave", canclePainting)