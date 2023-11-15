let scores = [10, 20, 10];

// increasing all scores by 1

// using a while loop
let i = 0;
while (i < scores.length) {
  scores[i]++;
  i++;
}

console.log(scores);

// using a for loop
for (i = 0; i < scores.length; i++) {
  scores[i]++;
}

console.log(scores);

scores.forEach(function (entry, index) {
  // console.log(entry, index);
  // entry++;
  scores[index]++;
});

console.log(scores);

let catalog = [
  {
    title: "JS for Beginners",
    author: "Zenva",
    copies: 1,
  },
  {
    title: "HTML for Beginners",
    author: "Zenva",
    copies: 1,
  },
  {
    title: "CSS for Beginners",
    author: "XYZ",
    copies: 1,
  },
];

catalog.forEach(function (entry) {
  if (entry.author == "Zenva") {
    entry.copies++;
  }
});

console.log(catalog);
