/* Access the elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress-filled");
const toggle = player.querySelector(".toggle");
const skipBtns = player.querySelectorAll("[data-skip]");
const fullScr = player.querySelector(".full-screen");
const ranges = player.querySelectorAll(".player-slider");

console.dir(player);
console.dir(video); //for viewing the methods and properties of video element
// console.log(progress);
// console.log(progressBar);
// console.log(toggle);
// console.log(skipBtns);
// console.log(ranges);

/* Build out functions */
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateBtn() {
    let icon = video.paused ? "►" : "❚ ❚";
    toggle.textContent = icon;
}

function skip() {
    console.log(this.dataset);
    video.currentTime += parseFloat(this.dataset.skip);
}

function updateRange() {
    video[this.name] = this.value;
}

function handleprogress() {
    let percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function enableFullscreen() {
    // console.log(document.fullscreenElement);
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        player.requestFullscreen();
    }
}

/* Add the event listeners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);
video.addEventListener("timeupdate", handleprogress);
video.addEventListener("dblclick", enableFullscreen);

toggle.addEventListener("click", togglePlay);

skipBtns.forEach(skipBtn => skipBtn.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener("click", updateRange));

ranges.forEach(range => range.addEventListener("mousemove", updateRange));

fullScr.addEventListener("click", enableFullscreen);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);

