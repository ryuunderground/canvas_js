const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

// fillRect은 .fill();의 영향을 안 받음음
ctx.fillRect(100, 50, 150, 270);
ctx.rect(300, 350, 150, 270);
ctx.stroke()
ctx.rect(500, 650, 50, 20);
ctx.fill();
ctx.rect(400, 350, 25, 40);
ctx.fillStyle = "aqua";
ctx.fill();

// 새로운 경로, 해당 상자는 따로 적용 됨
// 이전 경로와 단절

ctx.beginPath();
ctx.rect(125, 550, 60, 75);
ctx.fillStyle = "red";
ctx.fill();