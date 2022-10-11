let endPos = 5;
var pos = 0;
var enemyPos = 4;
var isGameOver = false;

// while(pos < endPos){
//     pos++;

// }

while(!isGameOver){
   pos++;
   console.log("Current position " + pos)
   if(pos == enemyPos){
    isGameOver = true;
    console.log("Game Over")
   }
}