let answer1 = document.getElementById("answer1")
let submit1 = document.getElementById("submit1")
let answer2 = document.getElementById("answer2")
let submit2 = document.getElementById("submit2")
let answer3 = document.getElementById("answer3")
let submit3 = document.getElementById("submit3")

let guesses = document.getElementById("progress")
let guesses2 = document.getElementById("progress2")
let guesses3 = document.getElementById("progress3")
let title = document.getElementById("title1")

let correctAnswer1 = ["united kingdom", "greece", "italy"];
let correctAnswer2 = ["france"];
let correctAnswer3 = ["sweden", "luxemburg"];

let correctGuessesCount1 = 0;
let correctGuessesCount2 = 0;
let correctGuessesCount3 = 0;
let correctGuesses = [];

guesses.textContent = `Correctly guessed: 0 / ${correctAnswer1.length}`
guesses2.textContent = `Correctly guessed: 0 / ${correctAnswer2.length}`
guesses3.textContent = `Correctly guessed: 0 / ${correctAnswer3.length}`

checkAnswer(submit1, answer1, correctAnswer1, correctAnswer1, guesses, correctGuessesCount1);
checkAnswer(submit2, answer2, correctAnswer2, correctAnswer2, guesses2, correctGuessesCount2);
checkAnswer(submit3, answer3, correctAnswer3, correctAnswer3, guesses3, correctGuessesCount3);

function checkAnswer (submitId, inputId, correctAnswer, answerArray, taskId, correctGuessesCount) {
    submitId.addEventListener("click", () => {

        let userAnswer = inputId.value.trim().toLowerCase();
    
        if (correctAnswer.includes(userAnswer)) {
            inputId.classList.add("correct-answer")
            inputId.classList.remove("wrong-answer")
            
            if (!correctGuesses.includes(userAnswer)) {
                correctGuessesCount++;
                correctGuesses.push(userAnswer)
                taskId.textContent = `Correctly guessed: ${correctGuessesCount} / ${answerArray.length}`
                console.log(correctGuessesCount)
                console.log(correctGuesses) 
            }
        }
    
        else if (inputId.value.trim().toLowerCase() != correctAnswer) {
            inputId.classList.add("wrong-answer")
            inputId.classList.remove("right-answer")
        }
    });
}

function checkAnswerImg {
    
}