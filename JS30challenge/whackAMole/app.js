const moles = document.querySelectorAll(".mole");
const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const h1 = document.querySelector("h1");
const p = document.createElement("p");
let timeUp = false;
let score = 0;
let lastHole;

function randomTime(min, max) {
    // console.log("working just fine");
    return Math.round(Math.random() * (max - min)) + min;

}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];

    if (hole === lastHole) {
        console.log("Nah that's the same one buddy!");
        return randomHole(holes);
    }
    lastHole = hole;
    console.log(hole);
    return hole;
}

function peep() {
    const time = randomTime(300, 1500);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
    // console.log("working just fine");
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => {
        timeUp = true;
        h1.appendChild(p);
        p.textContent = `TIME'S UP!`;
    }, 10000);
    if (h1.querySelector("p")) {
        h1.removeChild(p);
    }
    // console.log("working just fine");
}

function hit(e) {
    if (!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove("up");
    scoreBoard.textContent = score;
    // console.log("working just fine");
}

moles.forEach(mole => mole.addEventListener("click", hit));