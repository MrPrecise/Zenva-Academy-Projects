// Create new scene
let game_scene = new Phaser.Scene("Game");

// Initiate scene parameter
game_scene.init = function () {
  this.playerSpeed = 3;

  // Enemy Speed
  this.enemyMinSpeed = 2;
  this.enemyMaxSpeed = 4;

  // Boundries

  this.enemyMinY = 80;
  this.enemyMaxY = 280;
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
  let center_height = this.sys.game.config.height / 2;

  // Create the background sprite
  this.bg = this.add.sprite(0, 0, "background");

  // Change the origin of the back ground to fit the cordinates X:0 Y:0
  this.bg.setOrigin(0, 0);

  // Create the player sprite
  this.player = this.add.sprite(40, center_height, "player");

  //Messing around with scalers
  this.player.setScale(0.5);

  // Treasure Sprite

  this.treasure = this.add.sprite(
    this.sys.game.config.width - 80,
    center_height,
    "treasure"
  );
  this.treasure.setScale(0.6);

  this.enemy = this.add.sprite(120, center_height, "enemy");
  this.enemy.flipX = true;
  this.enemy.setScale(0.6);

  //Set Enemy speed
  let dir = Math.random() < 0.5 ? 1 : -1;
  let speed =
    this.enemyMinSpeed +
    Math.random() * (this.enemyMaxSpeed - this.enemyMinSpeed);
  this.enemy.speed = dir * speed;
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
    console.log("Woooooohooooooo han flyr");
    this.scene.restart();
  }
  // Enemy Movement
  this.enemy.y += this.enemy.speed;

  // Check y Min and y Max
  let cUp = this.enemy.speed < 0 && this.enemy.y <= this.enemyMinY;
  let cDown = this.enemy.speed > 0 && this.enemy.y >= this.enemyMaxY;

  if (cUp || cDown) {
    this.enemy.speed *= -1;
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
