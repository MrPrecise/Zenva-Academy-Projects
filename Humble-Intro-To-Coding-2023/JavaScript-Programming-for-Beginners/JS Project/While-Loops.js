// implement the function
function sendSignal() {
  console.log("HELP!");
}

// execute the function multiple times
let i = 0;
while (i < 1000) {
  sendSignal();
  //i = i + 1;
  //i += 1;
  i++;
}

let result = 0;

let j = 1;

while (j <= 10) {
  result = result + j;
  console.log(result);
  j++;
}

console.log(result);
