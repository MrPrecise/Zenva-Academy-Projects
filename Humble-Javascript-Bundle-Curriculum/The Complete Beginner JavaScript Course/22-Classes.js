class gChar {
    constructor (name, xPos, health){
        this.name = name;
        this.xPos = xPos;
        this.health = health;
    }

    move(x){
        this.xPos += x;
    }
}

class humanChar extends gChar{
    constructor(name, xPos, health){
        super(name, xPos, health);
        this.classification = "Human";
    }
}

var gc1 = new gChar('Eirik', 0, 100);
gc1.move(5);
gc1.name;

var hc1 = new humanChar('Zenva', 5, 150);