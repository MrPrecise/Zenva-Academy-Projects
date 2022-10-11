var inventory = ["shirt", "axe", "bread"]
// inventory = ["water", "pants"];

let shirt = inventory[0];
inventory[2] = "cheese";

var length = inventory.length; // 3
length = inventory[0].length; // 5

inventory.push("water"); // ["shirt", "axe", "cheese", "water"]
var water = inventory.pop();
