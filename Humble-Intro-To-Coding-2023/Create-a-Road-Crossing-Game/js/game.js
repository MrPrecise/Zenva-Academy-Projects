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
  let bg = this.add.sprite(0, 0, "background");

  // Change the origin of the back ground to fit the cordinates X:0 Y:0
  bg.setOrigin(0, 0);

  // Create the player sprite
  let player = this.add.sprite(70, 180, "player");

  //Messing around with scalers
  player.setScale(1, 1.25);

  // Create an enemy and mess with the scalers and turn the enemy upside down
  let enemy1 = this.add.sprite(250, 180, "enemy");

  enemy1.scaleX = 1;
  enemy1.scaleY = 1;
  enemy1.flipX = true;

  // Create a second enemy with explicit width
  let enemy2 = this.add.sprite(450, 180, "enemy");
  enemy2.displayWidth = 100;
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
