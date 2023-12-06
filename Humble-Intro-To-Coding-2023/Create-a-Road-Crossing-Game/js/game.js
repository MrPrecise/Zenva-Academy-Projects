// Create new scene
let game_scene = new Phaser.Scene("Game");

// Initiate scene parameter
game_scene.init = function () {
  this.playerSpeed = 3;

  // Enemy Speed
  this.enemyMinSpeed = 2;
  this.enemyMaxSpeed = 5;

  // Boundries

  this.enemyMinY = 80;
  this.enemyMaxY = 280;

  //Status
  this.isTerminating = false;
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

  // Enemies

  this.enemies = this.add.group({
    key: "enemy",
    repeat: 4,
    setXY: {
      x: 100,
      y: 100,
      stepX: 100,
      stepY: 20,
    },
  });

  // Settomg Scale to all elements in group
  Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.4, -0.4);

  // Set flipX and speed
  Phaser.Actions.Call(
    this.enemies.getChildren(),
    function (enemy) {
      // Flip enemy
      enemy.flipX = true;

      //Set Enemy speed
      let dir = Math.random() < 0.5 ? 1 : -1;
      let speed =
        this.enemyMinSpeed +
        Math.random() * (this.enemyMaxSpeed - this.enemyMinSpeed);
      enemy.speed = dir * speed;
    },
    this
  );
};

game_scene.update = function () {
  // Don't update if terminating
  if (this.isTerminating) return;

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
    return this.gameOver();
  }

  let enemies = this.enemies.getChildren();
  let numEnemies = enemies.length;

  for (let i = 0; i < numEnemies; i++) {
    // Enemy Movement
    enemies[i].y += enemies[i].speed;

    // Check y Min and y Max
    let cUp = enemies[i].speed < 0 && enemies[i].y <= this.enemyMinY;
    let cDown = enemies[i].speed > 0 && enemies[i].y >= this.enemyMaxY;

    if (cUp || cDown) {
      enemies[i].speed *= -1;
    }
    // Treasure overlap check

    let enemy_bounds = enemies[i].getBounds();
    if (
      Phaser.Geom.Intersects.RectangleToRectangle(player_bounds, enemy_bounds)
    ) {
      console.log("Game Over");
      return this.gameOver();
    }
  }
};

game_scene.gameOver = function () {
  this.isTerminating = true;

  this.cameras.main.shake(500);
  this.cameras.main.on(
    "camerashakecomplete",
    function () {
      this.cameras.main.fade(500);
    },
    this
  );

  this.cameras.main.on(
    "camerafadeoutcomplete",
    function () {
      this.scene.restart();
    },
    this
  );
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
