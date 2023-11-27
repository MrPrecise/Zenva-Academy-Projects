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

  // Create an enemy and mess with the scalers and turn the enemy upside down
  this.enemy1 = this.add.sprite(500, 180, "enemy");

  this.enemy1.scaleX = 1;
  this.enemy1.scaleY = 1;
  this.enemy1.flipX = true;
  this.enemy1.setOrigin(0, 0);
  this.enemy1.rotation = Math.PI / 4;
};

game_scene.update = function () {
  this.enemy1.angle += 1;
  if (this.player.scaleX < 2) {
    this.player.scaleX += 0.01;
    this.player.scaleY += 0.01;
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
