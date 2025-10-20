const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

// 벽
// fill: 다 채움
// stroke: 테두리만
ctx.fillRect(250, 300, 25, 200);
ctx.fillRect(550, 300, 25, 200);

// 문
// 선 굵기 변경 먼저
ctx.lineWidth = 3;
ctx.strokeRect(400, 420, 30, 75);

// 지붕
ctx.fillRect(250, 300, 300, 20)
ctx.moveTo(200, 320);
ctx.lineTo(412.5, 195);
ctx.lineTo(625, 320);
ctx.lineTo(200, 320);
ctx.fill();