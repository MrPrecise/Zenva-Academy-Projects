var keyPressed = "l";
var xPos = 0;
let endPos = 5;
let startPos = 0;


// if  (keyPressed == "r" && xPos < endPos) {
//         xPos += 1;
// }

if (keyPressed == "r"){
   if(xPos < endPos){
    xPos += 1;
   }
} else if  (keyPressed == "l") {
    if(xPos > startPos){
        xPos -= 1;
    }
} else {
    xPos = 0;
}

// var someNum = 5;

// if ( someNum > 4 ){
//     xPos += 1;
// }
// if (someNum > 2){
//     xPos -= 1;
// }