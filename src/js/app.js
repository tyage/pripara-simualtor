import Circle from './circle';

const width = 360;
const height = 640;

let gameWindow = document.getElementById('game-window');
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');

gameWindow.appendChild(canvas);
canvas.width = width;
canvas.height = height;

let clear = ctx => {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);
};

let circle = new Circle(10, 10, 10);
let step = () => {
  clear(ctx);

  circle.move();
  circle.draw(ctx);

  window.requestAnimationFrame(step);
};
step();
