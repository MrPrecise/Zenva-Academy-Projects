var gameCharacter = {
    name: "Eirik",
    xPos: 0,
    items: ["Knife", "Food"],
    move: function(x) {
        this.xPos += x;
    }
};

var name = gameCharacter.name;
// var name = gameCharacter['name'];
gameCharacter.items = ["Axe", "Bread"]
gameCharacter.move(5);
var x = gameCharacter.xPos;

gameCharacter.yPos = 0;
gameCharacter.move = function(x,y){
    this.xPos += x;
    this.yPos += y;
}