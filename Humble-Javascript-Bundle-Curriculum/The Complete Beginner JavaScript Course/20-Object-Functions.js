function gameChar(name, xPos, health){
    this.name = name;
    this.xPos = xPos;
    this.health = health;
    this.move = function(x){
        this.xPos += x;
    }
    this.class = "Human";
}

var gc1 = new gameChar ("Eirik", 0, 100);
var name = gc1.name;
gc1.health = 150;
gc1.move(10);
var gc2 = new gameChar ("Zenva", 5, 150);




// var gameChar = {
//     name: "",
//     xPos: 0,
//     health: 100
// }