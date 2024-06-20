
let hrHand = document.querySelector(".hr");
let minHand = document.querySelector(".min");
let secHand = document.querySelector(".sec");
let hands = document.querySelector(".hand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secDeg = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;
    console.log(seconds);

    const mins = now.getMinutes();
    const minDeg = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    const hr = now.getHours();
    const hrDeg = ((hr / 12) * 360) + 90;
    hrHand.style.transform = `rotate(${hrDeg}deg)`;

    hands.classList.toggle("toggle");

}

window.addEventListener("DOMContentLoaded", setDate);

setInterval(setDate, 1000);