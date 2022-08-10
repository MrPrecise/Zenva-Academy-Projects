let endPos = 10;
var xPos = 0;
var enemyPos = 4;
var isGameOver = false;

// while(pos < endPos){
//     pos++;

// }

// while(!isGameOver){
//    pos++;
//    console.log("Current position " + pos)
//    if(pos == enemyPos){
//     isGameOver = true;
//     console.log("Game Over")
//    }
// }

// while(xPos < endPos){
//     xPos++;
//     if(xPos == enemyPos){
//         break;
//     }
// }

// while(xPos < endPos){
//     if(xPos % 2 == 1){
//         xPos += 2;
//         continue;
//     }
//     xPos++;
//     if(xPos == enemyPos){
//         break;
//     }
// }

function movePlayer(){
    while( xPos < endPos){
        xPos++;
        if (xPos == enemyPos){
            return;
        }
    }

}