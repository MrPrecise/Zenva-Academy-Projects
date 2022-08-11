var gameCharacter = {
    name: "Eirik",
    class: "Human",
    health: 100,
    get title(){
        return this.name + " the " + this.class;
    },
    set maxHealth(hp){
        this.health = hp;
    },
    xPos: 0,
    items: ["Knife", "Food"],
    move: function(x) {
        this.xPos += x;
    }
};

gameCharacter.title; // "Eirik the Human"
gameCharacter.maxHealth = 150;
var health = gameCharacter.maxHealth // undefined

// var i = 5;
// var j = i;
// i = 10;  // i = 10, j = 5

// var gc = gameCharacter
// gc.name = "String" // gc.name = "String", gameCharacter.name = "String"