const checkboxes = document.querySelectorAll(".inbox input");

let lastChecked;

function handleCheck(e) {

    let inBetween = false;
    console.log(this);

    if (e.shiftKey && this.checked) {
        console.log(this);

        checkboxes.forEach(checkbox => {
            console.log(checkbox === checkbox);

            if (this === checkbox || lastChecked === checkbox) {
                inBetween = !inBetween;
                console.log("starting to check the in betweens");
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", handleCheck);
});