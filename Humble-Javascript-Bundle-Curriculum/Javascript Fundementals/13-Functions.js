var pos = 0;

/* Function which move a position by one */
// function move(){
//     pos += 1;
// }
// move();

/* Function which move a position by variable byAmount */
// function move(byAmount){
//     pos += byAmount;
// }
// move(5);

function move(pos, byAmount){
    const newPos = pos + byAmount;
    return newPos;
}

var finalPos = move(0,2);

console.log(finalPos);