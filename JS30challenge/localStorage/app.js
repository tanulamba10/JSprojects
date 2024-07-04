const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items")) || [];
const clearBtn = document.querySelector(".clear");

function addItem(e) {
    e.preventDefault();
    let text = this.querySelector("[name=item]").value;
    const item = {
        text,
        done: false
    };

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem("items", JSON.stringify(items));
    console.log(items);
    this.reset();
}

function populateList(plates = [], plateList) {
    plateList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ''}>
        <label for="item${i}">${plate.text}</label>
        <button class="active" data-index=${i}>Delete</button>
        </li>
        `;
    }).join('');

}

function toggleDone(e) {
    if (!e.target.matches("input")) return;
    let el = e.target;
    let index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
}

function deleteItem(e) {
    if (!e.target.matches("button")) return;
    let index = e.target.dataset;
    items.pop(items[index]);
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
}

function clearAll(e) {
    items.forEach((item) => {
        item.done = false;
    });
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
}


itemsList.addEventListener("click", toggleDone);
itemsList.addEventListener("click", deleteItem);

addItems.addEventListener("submit", addItem);

clearBtn.addEventListener("click", clearAll);

populateList(items, itemsList);

