// define the object for the question entity
let question = {
  title: "gato",
  alternatives: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};

let app = {
  start: function () {
    // get alternatives
    let alts = document.querySelectorAll(".alternative");

    // second method of passing context
    alts.forEach((element, index) => {
      element.addEventListener("click", () => {
        // check correct answer
        this.checkAnswer(index);
      });
    });

    // show first question
    this.showQuestion(question);
  },

  showQuestion: function (q) {
    // keep track of current question
    this.currQuestion = q;

    // show question title
    let titleDiv = document.getElementById("title");
    titleDiv.textContent = q.title;

    // show alternatives
    let alts = document.querySelectorAll(".alternative");

    alts.forEach(function (element, index) {
      element.textContent = q.alternatives[index];
    });
  },

  checkAnswer: function (userSelected) {
    if (this.currQuestion.correctAnswer == userSelected) {
      // correct
      console.log("correct");
    } else {
      // not correct
      console.log("wrong");
    }
  },
};

// initialize the application
app.start();
