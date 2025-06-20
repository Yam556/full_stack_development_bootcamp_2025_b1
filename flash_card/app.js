let currentIndex=0;
let showAnswer = false;
const questionAnswer = [
    {
    question: "What is the difference between var, const and let ?",
    answer:"In Javascript, var, let and const are used to declare variables, but they have important differneces in terms of scope, hoisting, and mutability. Here's a clear comparision:"
    }
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const showHideButton = document.getElementById("show_hide_btn");

function showCurrentItem() {
    const currentItem = questionAnswer[currentIndex];
    questionElement.textContent = currentItem.question;
    answerElement.textContent = currentItem.answer;

    questionElement.classList.remove("hidden");
    answerElement.classList.add("hidden");
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
showCurrentItem();
