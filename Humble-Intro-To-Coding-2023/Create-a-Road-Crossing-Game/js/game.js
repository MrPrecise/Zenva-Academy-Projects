// Create new scene
let game_scene = new Phaser.Scene("Game");
// Set configuration of the game
let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 360,
  scene: game_scene,
};

// Create a new game, pass configuration

let game = new Phaser.Game(config);
