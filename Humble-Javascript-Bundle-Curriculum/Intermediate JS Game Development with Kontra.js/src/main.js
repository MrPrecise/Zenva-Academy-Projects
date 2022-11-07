const { init, GameLoop, Sprite } = kontra;

const { canvas, context } = init();

const sprite = Sprite({
  x: 200,
  y: 200,
  color: "blue",
  width: 50,
  height: 20,
  dx: 2,
});

const loop = GameLoop({
  update: () => {
    // console.log("Update");
    sprite.update();
    if (sprite.x > canvas.width) {
      sprite.x = -sprite.width;
    }
  },
  render: () => {
    // console.log("Render");
    sprite.render();
  },
});
loop.start();

console.log(canvas, context, sprite);
