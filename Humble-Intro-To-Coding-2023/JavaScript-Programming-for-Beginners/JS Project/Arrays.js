let database = ["turtle", "cat", "dog", "bird"];
console.log(database);
console.log(database.length);

// accessing array elements
let animal = database[1];
console.log(animal);

// changing array elements
database[0] = "dinosaur";
console.log(database);

// access last array element
let last = database[database.length - 1];
console.log(last);

// add additional elements to the array
database.push("lizard");
console.log(database);

// remove last element of the array
database.pop();
console.log(database);
