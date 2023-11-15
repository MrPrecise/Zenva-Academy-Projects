let question = {
  title: "Gato",
  alternatives: ["Dog", "Cat", "Bird", "Fish"],
  correctAnswer: 1,
};

// define the array that stores all questions
let questions = [
  {
    title: "Gato",
    alternatives: ["Dog", "Cat", "Bird", "Fish"],
    correctAnswer: 1,
  },
  {
    title: "Ave",
    alternatives: ["Mouse", "Hamster", "Lizard", "Bird"],
    correctAnswer: 3,
  },
  {
    title: "Rata",
    alternatives: ["Cat", "Fish", "Rat", "Shark"],
    correctAnswer: 2,
  },
  {
    title: "Mosca",
    alternatives: ["Fly", "Puma", "Fish", "Dog"],
    correctAnswer: 0,
  },
];

let app = {
  start: function () {
    this.currPosition = 0;
    this.score = 0; // property to keep track of score

    // get alternatives
    let alts = document.querySelectorAll(".alternative");

    alts.forEach((element, index) => {
      element.addEventListener("click", () => {
        // check correct answer
        this.checkAnswer(index);
      });
    });

    // refresh stats
    this.updateStats();

    // show first question
    this.showQuestion(questions[this.currPosition]);
  },

  showQuestion: function (q) {
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
    let currQuestion = questions[this.currPosition];

    if (currQuestion.correctAnswer == userSelected) {
      // correct
      console.log("Correct");
      this.score++;
      this.showResult(true);
    } else {
      // not correct
      console.log("Wrong");
      this.showResult(false);
    }

    // refresh stats
    this.updateStats();

    // increase position
    this.increasePosition();

    // show next question
    this.showQuestion(questions[this.currPosition]);
  },

  increasePosition: function () {
    this.currPosition++;

    if (this.currPosition == questions.length) {
      this.currPosition = 0;
    }
  },

  updateStats: function () {
    let scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Your Score: ${this.score}`;
  },

  showResult: function (isCorrect) {
    // select the DOM element
    let resultDiv = document.getElementById("result");
    let result = "";

    // checks
    if (isCorrect) {
      result = "Correct Answer!";
    } else {
      // get the current question
      let currQuestion = questions[this.currPosition];

      // get the correct answer (index)
      let correctAnswerIndex = currQuestion.correctAnswer;

      // get correct answer (text)
      let correctAnswerText = currQuestion.alternatives[correctAnswerIndex];

      result = `Wrong! Correct Answer: ${correctAnswerText}`;
    }

    resultDiv.textContent = result;
  },
};

// initialize the application
app.start();
