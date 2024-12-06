let answer1 = document.getElementById("answer1")
let submit1 = document.getElementById("submit1")
let answer2 = document.getElementById("answer2")
let submit2 = document.getElementById("submit2")
let guesses = document.getElementById("progress")
let guesses2 = document.getElementById("progress2")
let title = document.getElementById("title1")

let correctAnswer1 = ["united kingdom", "greece", "italy"];
let correctAnswer2 = ["france"];

let correctGuessesCount = 0;
let correctGuesses = [];

guesses.textContent = `Correctly guessed: 0 / ${correctAnswer1.length}`

checkAnswer(submit1, answer1, correctAnswer1, correctAnswer1, guesses);
checkAnswer(submit2, answer2, correctAnswer2, correctAnswer2, guesses2);


function checkAnswer (submitId, inputId, correctAnswer, answerArray, taskId) {
    submitId.addEventListener("click", () => {

        let userAnswer = inputId.value.trim().toLowerCase();
    
        if (correctAnswer.includes(userAnswer)) {
            inputId.classList.add("correct-answer")
            inputId.classList.remove("wrong-answer")
            
            if (!correctGuesses.includes(userAnswer)) {
                correctGuessesCount++;
                correctGuesses.push(userAnswer)
                guesses.textContent = `Correctly guessed: ${correctGuessesCount} / ${correctAnswer1.length}`
                console.log(correctGuessesCount)
                console.log(correctGuesses) 
                console.log(correctAnswer1.length)
            }
        }
    
        else if (inputId.value.trim().toLowerCase() != correctAnswer) {
            inputId.classList.add("wrong-answer")
            inputId.classList.remove("right-answer")
        }
    });
}