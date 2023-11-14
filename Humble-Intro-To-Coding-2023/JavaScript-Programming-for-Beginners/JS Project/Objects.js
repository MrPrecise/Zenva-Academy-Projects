// declare the object
let player = {
  age: 99,
  name: "ABC",
  isActive: true,
  outfit: {
    color: "blue",
    size: "M",
    cost: 100,
    isNew: true,
  },
};

console.log(player);

// accessing properties of the object
console.log(player.name);
console.log(player["name"]);

// modifying a property
player.isActive = false;
console.log(player);

// adding new properties to the object
player.health = 100;
console.log(player);

// deleting a property
delete player.health;
console.log(player);

console.log(player.outfit.color);

// modify the size of the outfit of the player
player.outfit.size = "S";
console.log(player);
