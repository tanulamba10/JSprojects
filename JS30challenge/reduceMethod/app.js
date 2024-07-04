const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const time = timeNodes
    .map(Node => Node.dataset.time)
    .map(str => {
        const [mins, secs] = str.split(":").map(parseFloat);
        return mins * 60 + secs;
    });

let totalSecs = time.reduce((total, seconds) => total + seconds);

let secondsLeft = totalSecs;
let hours = Math.floor(totalSecs / 3600);
secondsLeft = secondsLeft % 3600;

let mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;


console.log(time);
console.log(`total time of the videos - ${hours}:${mins}:${secondsLeft}`);