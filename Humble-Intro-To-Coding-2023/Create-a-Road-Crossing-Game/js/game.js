// Create new scene
let game_scene = new Phaser.Scene("Game");

// Load Assets
game_scene.preload = function () {
  this.load.image("background", "assets/background.png");
  this.load.image("player", "assets/player.png");
  this.load.image("enemy", "assets/dragon.png");
};

// Called once after preload ends
game_scene.create = function () {
  // Create the background sprite
  this.bg = this.add.sprite(0, 0, "background");

  // Change the origin of the back ground to fit the cordinates X:0 Y:0
  this.bg.setOrigin(0, 0);

  // Create the player sprite
  this.player = this.add.sprite(40, 180, "player");

  //Messing around with scalers
  this.player.setScale(0.5);
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
