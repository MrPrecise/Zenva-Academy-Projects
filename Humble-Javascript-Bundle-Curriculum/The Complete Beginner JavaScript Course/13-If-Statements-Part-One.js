var keyPressed = "l";
var xPos = 0;

if (keyPressed == "l"){
    console.log("Move Left");
    xPos -= 1;
} else if  (keyPressed == "r") {
    console.log("Move Right");
    xPos += 1;
} else {
    xPos = 0;
}