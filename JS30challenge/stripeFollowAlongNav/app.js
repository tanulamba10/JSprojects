const triggers = document.querySelectorAll(".cool > li");
const nav = document.querySelector(".top");
const background = document.querySelector(".dropdownBackground");

function handleEnter() {
    this.classList.add("trigger-enter");
    setTimeout(() => this.classList.contains("trigger-enter") && this.classList.add("trigger-enter-active"), 100);
    background.classList.add("open");

    const dropdown = this.querySelector(".dropdown");
    let dropdownCoords = dropdown.getBoundingClientRect();
    let navCoords = nav.getBoundingClientRect();
    console.log(dropdownCoords, navCoords);

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    this.classList.remove("trigger-enter", "trigger-enter-active");
    background.classList.remove("open");
}

triggers.forEach(trigger => trigger.addEventListener("mouseenter", handleEnter));
triggers.forEach(trigger => trigger.addEventListener("mouseleave", handleLeave));