let countdown;
const timerDisplay = document.querySelector(".display-time-left");
const endTime = document.querySelector(".display-end-time");
const btns = document.querySelectorAll("[data-time]");

function timer(seconds) {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    console.log(now, then);
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);

}

function displayTimeLeft(seconds) {
    let mins = Math.floor(seconds / 60);
    let remainingSecs = seconds % 60;
    const display = `${mins < 10 ? '0' : ''}${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
    timerDisplay.textContent = display;
    document.title = display;
    console.log(mins, remainingSecs);
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hrs = end.getHours();
    const adjustedHrs = hrs > 12 ? hrs - 12 : hrs;
    const mins = end.getMinutes();
    endTime.textContent = `Be Right Back At ${adjustedHrs < 10 ? '0' : ''}${adjustedHrs}:${mins < 10 ? '0' : ''}${mins}`;

}

function startTimer() {
    let seconds = parseInt(this.dataset.time);
    timer(seconds);
}

btns.forEach(btn => btn.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
});