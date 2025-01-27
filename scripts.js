const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");

function startQuiz() {
  startScreen.style.display = "none";
  quizContainer.style.display = "block";
  loadChallenge();
}
const challenges = [
  {
    type: "pattern",
    question: "What comes next in the pattern?",
    pattern: "2, 4, 6, 8, ?",
    options: ["10", "12", "9", "11"],
    correct: 0,
    explanation: "The pattern increments by 2 each step.",
  },
  {
    type: "pattern",
    question: "What comes next in the pattern?",
    pattern: "A, B, C, D, ?",
    options: ["E", "F", "G", "H"],
    correct: 0,
    explanation: "This is a simple alphabetical sequence.",
  },
  {
    type: "pattern",
    question: "What comes next in the pattern?",
    pattern: "1, 1, 2, 3, 5, ?",
    options: ["8", "6", "7", "9"],
    correct: 0,
    explanation:
      "This is the Fibonacci sequence, where each number is the sum of the previous two.",
  },
  {
    type: "fun",
    question: "Which of the following is an example of quantitative data?",
    pattern: "",
    options: [
      "Height of students",
      "Names of students",
      "Colors of shirts",
      "Types of plants",
    ],
    correct: 0,
    explanation:
      "Quantitative data refers to numerical values that can be measured. 'Height of students' is a numerical measurement.",
  },

  {
    type: "fun",
    question:
      "What are the Similarities of Sir. Briones, Sir. Pura, and Capucao?",
    pattern: "",
    options: [
      "Professors at Partido State University",
      "They all teach the same subject",
      "They are teaching in the College of Education",
      "None of the above",
    ],
    correct: 0,
    explanation: "They are professors in ParSU.",
  },
  {
    type: "fun",
    question: "What were the final words of Rizal?",
    pattern: "",
    options: [
      "Risky, risky, wigi, wigi!",
      "I shall return!",
      "Ouchy! Argghhh!",
      "Consummatum est",
    ],
    correct: 3,
    explanation: "Consummatum est was the final words of Jose Rizal.",
  },
  {
    type: "pattern",
    question: "What comes next in the pattern?",
    pattern: "10, 20, 40, 80, ?",
    options: ["100", "120", "160", "200"],
    correct: 2,
    explanation: "The pattern doubles each step.",
  },
  {
    type: "pattern",
    question: "What comes next in the pattern?",
    pattern: "Monday, Wednesday, Friday, ?",
    options: ["Saturday", "Sunday", "Tuesday", "Monday"],
    correct: 1,
    explanation: "It skips one day each time.",
  },
  {
    type: "pattern",
    question: "What comes next in the pattern?",
    pattern: "2, 5, 10, 17, ?",
    options: ["24", "26", "28", "30"],
    correct: 1,
    explanation:
      "The pattern increments by consecutive odd numbers (3, 5, 7...).",
  },
  {
    type: "pattern",
    question: "What comes next in the pattern?",
    pattern: "3, 9, 27, ?",
    options: ["81", "72", "100", "54"],
    correct: 0,
    explanation: "The pattern multiplies by 3 each time.",
  },
  {
    type: "pattern",
    question: "What comes next in the pattern?",
    pattern: "2, 3, 5, 7, 11, ?",
    options: ["12", "13", "15", "14"],
    correct: 1,
    explanation: "This is the sequence of prime numbers.",
  },
  {
    type: "pattern",
    question: "What comes next in the pattern?",
    pattern: "Red, Orange, Yellow, Green, ?",
    options: ["Blue", "Indigo", "Violet", "Purple"],
    correct: 0,
    explanation: "This is the sequence of colors in a rainbow.",
  },
  {
    type: "fun",
    question: "Which of the following is an example of nominal data?",
    pattern: "",
    options: ["Types of cars", "Number of cars", "Car speeds", "Car prices"],
    correct: 0,
    explanation:
      "Nominal data categorizes items. 'Types of cars' is a categorical variable.",
  },
  {
    type: "fun",
    question:
      "A dataset contains the following entries: 3, 5, 7, 2. What is the mean?",
    pattern: "",
    options: ["3", "4.25", "5", "4"],
    correct: 1,
    explanation: "The mean is calculated as (3+5+7+2)/4 = 4.25.",
  },
  {
    type: "pattern",
    question: "What comes next in the pattern?",
    pattern: "Square, Circle, Triangle, ?",
    options: ["Rectangle", "Polygon", "Oval", "Hexagon"],
    correct: 0,
    explanation: "This pattern alternates between basic geometric shapes.",
  },
  {
    type: "fun",
    question:
      "In a survey, data collected includes the types of beverages people prefer. What type of data is this?",
    pattern: "",
    options: ["Quantitative", "Qualitative", "Ordinal", "Interval"],
    correct: 1,
    explanation:
      "Preference data is qualitative, as it categorizes people's choices.",
  },
  {
    type: "pattern",
    question: "What comes next in the pattern?",
    pattern: "Apple, Banana, Cherry, ?",
    options: ["Date", "Grape", "Mango", "Peach"],
    correct: 1,
    explanation:
      "The pattern follows alphabetical order of fruits starting with vowels.",
  },
  {
    type: "fun",
    question: "Which of these is an example of ordinal data?",
    pattern: "",
    options: [
      "Ranking of students",
      "Height of students",
      "Grades in exams",
      "Names of students",
    ],
    correct: 0,
    explanation: "Ordinal data represents ordered categories like rankings.",
  },
  {
    type: "fun",
    question: "What is the median of this dataset: 3, 5, 9, 2, 6?",
    pattern: "",
    options: ["5", "6", "9", "3"],
    correct: 0,
    explanation:
      "The median is the middle value when the data is sorted: 2, 3, 5, 6, 9.",
  },
  {
    type: "pattern",
    question: "What comes next in the pattern?",
    pattern: "North, South, East, ?",
    options: ["West", "Up", "Down", "Left"],
    correct: 0,
    explanation:
      "The pattern follows cardinal directions: North, South, East, and West.",
  },
];

let currentChallenge = 0;
let score = 0;
let answered = false; // New variable to prevent multiple scoring

const questionEl = document.getElementById("question");
const patternEl = document.getElementById("pattern");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next");
const explanationEl = document.getElementById("explanation");

function loadChallenge() {
  answered = false; // Reset answered status for each question
  const challenge = challenges[currentChallenge];
  questionEl.textContent = challenge.question;
  patternEl.textContent = challenge.pattern || "";
  optionsEl.innerHTML = "";
  explanationEl.textContent = ""; // Reset the explanation text
  challenge.options.forEach((option, index) => {
    const btn = document.createElement("div");
    btn.classList.add("option");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (answered) return; // Prevent multiple scoring
  answered = true; // Mark question as answered
  const challenge = challenges[currentChallenge];
  if (selected === challenge.correct) {
    score++;
  }
  explanationEl.textContent = challenge.explanation;
  scoreEl.textContent = score;
  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentChallenge++;
  if (currentChallenge < challenges.length) {
    loadChallenge();
    nextBtn.style.display = "none";
  } else {
    endGame();
  }
}

function endGame() {
  questionEl.textContent = "Game Over!";
  patternEl.textContent = "";
  optionsEl.innerHTML = `Your final score is ${score} out of ${challenges.length}.`;
  explanationEl.textContent = "";
  nextBtn.style.display = "none";

  // Call the function to show the score submission form
  showScoreForm();
}

function showScoreForm() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("score-form").style.display = "block";
  document.getElementById("finalScore").value =
    document.getElementById("score").innerText;
}

document
  .getElementById("scoreSubmissionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    fetch(event.target.action, {
      method: "POST",
      body: new URLSearchParams(new FormData(event.target)),
    })
      .then((response) => {
        if (response.ok) {
          alert("Score submitted successfully!");
        } else {
          alert("Failed to submit score. Please try again.");
        }
      })
      .catch((error) => {
        alert(
          "Error submitting score. Please check your connection and try again."
        );
      });
  });
