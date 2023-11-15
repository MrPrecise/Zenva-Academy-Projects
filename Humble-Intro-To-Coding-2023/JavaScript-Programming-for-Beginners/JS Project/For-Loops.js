let population = 100;

//population = population * 1.05;
//population *= 1.05;

// implementing increase of population with a while loop
/*let i = 0;
while(i < 10) {
  population *= 1.05;
  i++;
}

console.log(population);
*/

// implementing the same logic with a for loop
for (let i = 0; i < 10; i++) {
  population *= 1.05;
}

console.log(population);
