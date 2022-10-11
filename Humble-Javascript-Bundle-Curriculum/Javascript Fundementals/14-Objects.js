var GameCharacter = {
    name: "Eirik",
    pos: 2,
    health: 100,
    move: function(byAmount){
        this.pos += byAmount;
    }
};

var charName = GameCharacter.name;
GameCharacter.health = 50;
GameCharacter.move(10);
console.log(GameCharacter.pos)
