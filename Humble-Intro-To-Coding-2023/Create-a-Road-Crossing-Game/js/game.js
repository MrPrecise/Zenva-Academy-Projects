// Create new scene
let game_scene = new Phaser.Scene("Game");

// Load Assets
game_scene.preload = function () {
  this.load.image("background", "assets/background.png");
  this.load.image("player", "assets/player.png");
};

// Called once after preload ends
game_scene.create = function () {
  let bg = this.add.sprite(0, 0, "background");
  bg.setPosition(640 / 2, 360 / 2);
  let game_width = this.sys.game.config.width;
  let game_height = this.sys.game.config.height;
};

// Set configuration of the game
let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 360,
  scene: game_scene,
};

// Create a new game, pass configuration

let game = new Phaser.Game(config);
