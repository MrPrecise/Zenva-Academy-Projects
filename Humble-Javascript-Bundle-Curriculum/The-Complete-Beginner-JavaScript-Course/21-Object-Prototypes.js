function gameChar(name, xPos, health){
    this.name = name;
    this.xPos = xPos;
    this.health = health;
    this.move = function(x){
        this.xPos += x;
    }
}

var gc1 = new gameChar ("Eirik", 0, 100);
gc1.yPos = 5; // 5

var gc2 = new gameChar ("Eirik", 5, 150);
// gc2.yPos; // reference error

gameChar.prototype.class = "Human";
gc1.class = "abcdefg"; // abcdefg
gc2.class; // Human

var heal = function(amount){
    this.health += amount;
}

gameChar.prototype.heal = heal;
gc1.heal(5);
gc2.heal(10);