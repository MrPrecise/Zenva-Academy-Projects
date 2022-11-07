const { init, GameLoop } = kontra;

const { canvas, context } = init();

console.log(canvas, context);

const loop = GameLoop({
  update: () => {
    console.log("Update");
  },
  render: () => {
    console.log("Render");
  },
});
loop.start();
