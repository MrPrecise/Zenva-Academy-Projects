var items = ["Axe", "Shirt", "Knife"]
var invString = "in my inventory, I have "
var invString2 = "in my inventory, I have "

for(var i = 0; i < items.length; i++){
    var itemName = items[i];
    if(i == items.length-1){
        invString += itemName + ".";
        console.log(invString);
    } else {
        invString += itemName + ", ";
    }
}

items.forEach(function(element){
    invString2 += element + " ";
    console.log(invString2);
});