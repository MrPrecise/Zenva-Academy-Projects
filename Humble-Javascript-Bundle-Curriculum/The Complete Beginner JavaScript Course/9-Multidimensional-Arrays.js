var levels = [
    [1.1, 1.2, 1.3],
    [2.1, 2.2, 2.3, 2.4],
    [3.1, 3.2],
];

var firstWorld = levels[0]; // [ 1.1, 1.2, 1.3 ]
var firstLevel = levels[0][1]; // 1.2
//console.log(firstWorld, firstLevel)


// Homework
arrObj = levels[1].pop();
console.log(levels)
levels[2].push(arrObj);
console.log(levels);

