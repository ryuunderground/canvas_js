const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

// 팔
ctx.fillRect(270, 300, 25, 120)
ctx.fillRect(455, 300, 25, 120)

// 몸통
ctx.fillRect(300, 300, 150, 200)

// 머리
ctx.arc(375, 250, 50, -4/3*Math.PI, 1/3*Math.PI);
ctx.fill()

// 눈

ctx.beginPath();
ctx.fillStyle = "ivory";
ctx.arc(355, 240, 5, Math.PI, 2*Math.PI);
ctx.arc(395, 240, 5, Math.PI, 2*Math.PI);
ctx.fill();