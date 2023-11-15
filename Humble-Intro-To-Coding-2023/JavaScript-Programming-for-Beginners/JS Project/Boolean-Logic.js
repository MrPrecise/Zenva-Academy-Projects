let distance = 250;
let fuel = 100;

// these are boolean variables
let distanceCondition = distance <= 200 && distance >= 100;
let isEngineFunctioning = true;

// console.log(distanceCondition);

if (!isEngineFunctioning || distance > 200) {
  console.log("Wont make it");
} else if (distanceCondition && fuel >= 100) {
  console.log("You will make it");
} else if (distance < 100 && fuel >= 25) {
  console.log("You will make it");
}
