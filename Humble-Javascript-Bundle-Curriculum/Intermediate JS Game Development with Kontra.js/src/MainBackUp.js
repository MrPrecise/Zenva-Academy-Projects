const { init, GameLoop, Sprite, initPointer, track } = kontra;

const { canvas, context } = init();
initPointer();

let sprite = null;
const blockImage = new Image();
blockImage.src = "assets/images/bean_blue.png";
blockImage.onload = () => {
  sprite = Sprite({
    x: 200,
    y: 200,
    //dx: 2,
    image: blockImage,
    onDown: () => {
      console.log("onDown");
    },
    onUp: () => {
      console.log("onUp");
    },
    onOver: () => {
      console.log("onOver");
    },
  });
  track(sprite);
};
const loop = GameLoop({
  update: () => {
    if (sprite) {
      sprite.update();
      //   if (sprite.x > canvas.width) {
      //     sprite.x = -sprite.width;
      //   }
    }
    // console.log("Update");
  },
  render: () => {
    // console.log("Render");
    if (sprite) {
      sprite.render();
    }
  },
});
loop.start();

console.log(canvas, context, sprite);
