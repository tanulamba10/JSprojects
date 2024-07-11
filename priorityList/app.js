const draggable_list = document.querySelector(".draggable-list");
// const save = document.querySelector(".save-btn");
let dragStartIndex;

console.log(draggable_list);

let myWishList = [
    'A Solo Trip',
    'Make A Podcast with a friend',
    'Master one form of Dance',
    'Learn Martial Arts',
    'Learn different languages',
    "Go to Ariana's concert"
];

//List Items
const listItems = [];

//Insert List Items into DOM
function createList(myWishList = []) {
    [...myWishList]
        .forEach((person, index) => {
            const listItem = document.createElement("li");

            listItem.setAttribute('data-index', index);

            listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fa-solid fa-grip-lines grip"></i>
        </div>
        `;

            listItems.push(listItem);

            draggable_list.appendChild(listItem);
        });
    addEventListeners();
}

function dragEnter() {
    this.classList.add("over");
}

function dragOver(e) {
    e.preventDefault();
}

function dragLeave() {
    this.classList.remove("over");

}

function dragStart() {
    dragStartIndex = +(this.closest('li').getAttribute("data-index"));
}

function dragDrop() {
    const dragEndIndex = +(this.getAttribute('data-index'));
    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('over');
}

function swapItems(startIdx, endIdx) {
    const itemOne = listItems[startIdx].querySelector('.draggable');
    const itemTwo = listItems[endIdx].querySelector('.draggable');

    console.log('working well');
    listItems[startIdx].appendChild(itemTwo);
    listItems[endIdx].appendChild(itemOne);
    console.log(listItems);

}

// function saveOrder() {
//     localStorage.setItem("wishlist", JSON.stringify(listItems));

// }

// function loadListFromStorage() {
//     const storedWishlist = localStorage.getItem("wishlist");
//     if (storedWishlist) {
//         myWishList = JSON.parse(storedWishlist);
//     } else {
//         myWishList = myWishList;
//     }
// }

// function deleteItem(e) {
//     if (!e.target.matches("i#delete")) return;
//     let el = e.target.parentNode.parentElement;
//     let idx = el.dataset.index;
//     draggable_list.removeChild(listItems[idx]);
// }

//Add Event Listeners
function addEventListeners() {
    const draggables = document.querySelectorAll(".draggable");
    const dragListItems = document.querySelectorAll(".draggable-list li");

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", dragStart);
    });

    dragListItems.forEach(item => {
        item.addEventListener("dragenter", dragEnter);
        item.addEventListener("drop", dragDrop);
        item.addEventListener("dragover", dragOver);
        item.addEventListener("dragleave", dragLeave);
        // item.addEventListener("click", deleteItem);
    });
}

// save.addEventListener("click", saveOrder);
// <i class="fa-solid fa-trash" id="delete"></i>
// window.addEventListener("DOMContentLoaded", loadListFromStorage);

createList(myWishList);
