// > >= < <= == !=

var number1 = 5;
var number2 = 10;

var results = number1 > number2; // false
results = number1 != number2; // true

var string1 = "hello";
var string2 = "world";
results = string1 == string2; // false

// !, ||, &&

results = !results;
results = number1 > number2 && string1 == string2; // false
number2 = number1;
results = number1 == number2 || string1 == string2; // true

// ? : 
results = number1 > number2 ? number1 : number2;

//Homework

var lives = 10;
gameOver = lives <= 0 ? true : false;
console.log(gameOver);