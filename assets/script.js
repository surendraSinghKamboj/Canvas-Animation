const canvas = document.getElementById("first");

let ctx = canvas.getContext("2d");
let cty = canvas.getContext("2d");
let ctz = canvas.getContext("2d");

let xCord = 200;
let yCord = 200;
let ctyX = 70;
let ctyY = 60;
let radius = 20;
let ctzX = 300;
let ctzY = 450;
let xVelo = 2;
let yVelo = 2;
let xVelo2 = -2;
let yVelo2 = -2;
let xVelo3 = 3;
let yVelo3 = -2;

function animation() {
  // Circle 1 Condition
  if (xCord + radius >= canvas.clientHeight) {
    xVelo = -2 + Math.random();
  }
  if (yCord + radius >= canvas.clientHeight) {
    yVelo = -2 + Math.random();
  }
  if (xCord - radius <= 0) {
    xVelo = 2 + Math.random();
  }
  if (yCord - radius <= 0) {
    yVelo = 2 + Math.random();
  }
  // Circle 2 Conditions
  if (ctyX + radius >= canvas.clientWidth) {
    xVelo2 = -3 + Math.random();
  }
  if (ctyY + radius >= canvas.clientHeight) {
    yVelo2 = -2 + Math.random();
  }
  if (ctyX - radius <= 0) {
    xVelo2 = 3 + Math.random();
  }
  if (ctyY - radius <= 0) {
    yVelo2 = 2 + Math.random();
  }
  // Circle 3 Condition
  if (ctzX + radius >= canvas.clientWidth) {
    xVelo3 = -3 + Math.random();
  }
  if (ctzY + radius >= canvas.clientHeight) {
    yVelo3 = -2 + Math.random();
  }
  if (ctzX - radius <= 0) {
    xVelo3 = 3 + Math.random();
  }
  if (ctzY - radius <= 0) {
    yVelo3 = 2 + Math.random();
  }


  //  all Coordinates
  ctzX += xVelo3;
  ctzY += yVelo3;
  xCord += xVelo;
  yCord += yVelo;
  ctyX += xVelo2;
  ctyY += yVelo2;

  // Clear Function Calling
  clearCanvas();

  // Circle 1
  ctx.beginPath();
  ctx.arc(xCord, yCord, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "#FF0c00";
  ctx.fill();

  // Circle 2
  cty.beginPath();
  cty.arc(ctyX, ctyY, radius, 0, 2 * Math.PI);
  cty.fillStyle = "blue";
  cty.fill();

  // Circle 3
  ctz.beginPath();
  ctz.arc(ctzX, ctzY, radius, 0, 2 * Math.PI);
  ctz.fillStyle = "green";
  ctz.fill();

  window.requestAnimationFrame(animation);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

window.requestAnimationFrame(animation);
