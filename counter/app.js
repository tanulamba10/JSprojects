let count = 0;

let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let styles = e.target.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("reset")) {
            count = 0;
        } else {
            count++;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count === 0) {
            value.style.color = "black";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        value.textContent = count;
    });
});