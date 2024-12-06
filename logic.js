var answer1 = document.getElementById("answer1")
var submit1 = document.getElementById("submit1")

var correctAnswer1 = ["united kingdom", "great britain", "greece", "italy"];
var correctAnswer2 = "france";


submit1.addEventListener("click", () => {
    if (answer1.value.trim().toLowerCase() === correctAnswer1) {
        answer1.classList.add("correct-answer")
    }

    else if (answer1.value.trim().toLowerCase() != correctAnswer1) {
        answer1.classList.add("wrong-answer")
    }
});




submit2.addEventListener("click", () => {
    if (answer2.value.trim().toLowerCase() === correctAnswer2) {
        answer2.classList.add("correct-answer")
    }

    else if (answer2.value.trim().toLowerCase() != correctAnswer2) {
        answer2.classList.add("wrong-answer")
    }
});