let currentIndex=0;
let showAnswer = false;
const questionAnswer = [
    {
    question: "What is the difference between var, const and let ?",
    answer:"In Javascript, var, let and const are used to declare variables, but they have important differneces in terms of scope, hoisting, and mutability. Here's a clear comparision:"
    },
    {
    question: "What is a closure in JavaScript?",
    answer: "A closure is a function that has access to its own scope, the outer function’s scope, and the global scope."
  },
  {
    question: "What is the use of 'this' keyword?",
    answer: "`this` refers to the object it belongs to, and its value depends on how a function is called."
  },
  {
    question: "What is an arrow function?",
    answer: "An arrow function is a shorter syntax for writing functions and does not have its own `this`."
  },
   {
    question: "What is a promise?",
    answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation."
  },
  {
    question: "What does async/await do?",
    answer: "`async` functions return promises, and `await` pauses execution until a promise resolves or rejects."
  },
  {
    question: "What is the difference between null and undefined?",
    answer: "`undefined` means a variable has been declared but not assigned a value. `null` is an intentional absence of value."
  }

]
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const showHideButton = document.getElementById("show_hide_btn");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");
const progressElement = document.getElementById("progress_bar");
const progressPercentage = document.getElementById("progress_percentage");
// This code is for a simple flashcard application that allows users to view questions and answers, navigate through them, and toggle the visibility of answers.
const statsElement = document.getElementById("stats");
// The application displays a question and its corresponding answer, with buttons to show/hide the answer and navigate between questions.

function showCurrentItem() {
    const currentItem = questionAnswer[currentIndex];
    questionElement.textContent = currentItem.question;
    answerElement.textContent = currentItem.answer;

    questionElement.classList.remove("hidden");
    answerElement.classList.add("hidden");
    showHideButton.textContent = "Show Answer";

    updateProgressBar();   //created to get change the progress bar based on question answer.
}
function updateProgressBar() {
    const percentage = ((currentIndex + 1) / questionAnswer.length) * 100;
    progressElement.style.width= `${400 * percentage / 100}px`;
    progressPercentage.textContent = parseInt(percentage) + "%";
    statsElement.textContent = `${currentIndex + 1} of ${questionAnswer.length}`;
}

showHideButton.addEventListener("click", function() {
    showAnswer = !showAnswer;
    if (showAnswer) {
        questionElement.classList.add("hidden");
        answerElement.classList.remove("hidden");
        showHideButton.textContent = "Hide Answer";
    }
    else {
        questionElement.classList.remove("hidden");
        answerElement.classList.add("hidden");
        showHideButton.textContent = "Show Answer";
    }
}
);
nextButton.addEventListener("click", function() {
    showCurrentItem();
    if (currentIndex < questionAnswer.length -1) {
        currentIndex++;              
        showCurrentItem();
    }
    
}
);
prevButton.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        showCurrentItem();
    }
});
showCurrentItem();
