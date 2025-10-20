const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

// fillRect은 .fill();의 영향을 안 받음음
ctx.moveTo(65,100);
ctx.lineTo(132, 165);
ctx.lineTo(12, 265);
ctx.lineTo(45, 115);
ctx.lineTo(65,100);
ctx.stroke();