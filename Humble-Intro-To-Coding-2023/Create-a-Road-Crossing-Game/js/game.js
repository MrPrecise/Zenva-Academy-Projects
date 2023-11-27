// Create new scene
let game_scene = new Phaser.Scene("Game");

// Initiate scene parameter
game_scene.init = function () {
  this.playerSpeed = 3;
};

// Load Assets
game_scene.preload = function () {
  this.load.image("background", "assets/background.png");
  this.load.image("player", "assets/player.png");
  this.load.image("enemy", "assets/dragon.png");
  this.load.image("treasure", "assets/treasure.png");
};

// Called once after preload ends
game_scene.create = function () {
  // Create the background sprite
  this.bg = this.add.sprite(0, 0, "background");

  // Change the origin of the back ground to fit the cordinates X:0 Y:0
  this.bg.setOrigin(0, 0);

  // Create the player sprite
  this.player = this.add.sprite(40, this.sys.game.config.height / 2, "player");

  //Messing around with scalers
  this.player.setScale(0.5);

  // Treasure Sprite

  this.treasure = this.add.sprite(
    this.sys.game.config.width - 80,
    this.sys.game.config.height / 2,
    "treasure"
  );
  this.treasure.setScale(0.6);
};

game_scene.update = function () {
  if (this.input.activePointer.isDown) {
    this.player.x += this.playerSpeed;
  }

  // Treasure overlap check
  let player_bounds = this.player.getBounds();
  let treasure_bounds = this.treasure.getBounds();
  if (
    Phaser.Geom.Intersects.RectangleToRectangle(player_bounds, treasure_bounds)
  ) {
    console.log("Happy");
  }
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
