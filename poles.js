let romania = document.getElementById("romania")
let poland = document.getElementById("poland")
let brasil = document.getElementById("brasil")
let hungary = document.getElementById("hungary")
let senegal = document.getElementById("senegal")
let argentina = document.getElementById("argentina")
let pole7 = document.getElementById("pole7")
let pole8 = document.getElementById("pole8")
let thePole = document.getElementById("thePole")

let poleCountries = ["Romania", "Poland", "Brasil", "Hungary", "Senegal", "Argentina"];

let randomInt = Math.floor(Math.random() * poleCountries.length);
let randomPole = poleCountries[randomInt]


thePole.textContent = `Which of these poles can be found in ${randomPole}?`

    


checkAnswerImg(romania)
checkAnswerImg(poland)
checkAnswerImg(brasil)
checkAnswerImg(hungary)
checkAnswerImg(senegal)
checkAnswerImg(argentina)
checkAnswerImg(pole7)
checkAnswerImg(pole8)

function checkAnswerImg(poleNro) {
    poleNro.addEventListener("click", () => {
        console.log(poleNro.id)
        console.log(randomPole.trim().toLowerCase())
        if (poleNro.id === randomPole.trim().toLowerCase()) {
            poleNro.classList.add("correct-answer-img")

            setTimeout(() => {
                poleNro.classList.remove("correct-answer-img");
            }, 500);

            setTimeout(() => {
                poleNro.classList.add("answered")
            }, 500);

            randomInt = Math.floor(Math.random() * poleCountries.length);
            randomPole = poleCountries[randomInt];
            thePole.textContent = `Which of these poles can be found in ${randomPole}?`
        }

        else if (poleNro.id != randomPole.trim().toLowerCase()) {
            console.log("Wrong answer")
            poleNro.classList.add("wrong-answer-img")

            setTimeout(() => {
                poleNro.classList.remove("wrong-answer-img");
            }, 750);
        };

    });
}