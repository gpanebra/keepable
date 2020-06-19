const createButton = document.querySelector(".keep-button")
createButton.addEventListener("click", createCardHtml)
const others = document.querySelector(".others")
const pallette_buttons = document.querySelectorAll(".pallette-button")
pallette_buttons.forEach((element) => element.addEventListener("click", pallete))

let card_id = 0
function createCardHtml() {
    card_id++
    let color = "color-1"
    let content = document.querySelector("#body-note").value;
    const card = document.createElement("div");
    card.className = `card ${color}`;
    card.id = `card-${card_id}`
    card.innerHTML = `
    <p class="card__content">${content}</p>
    <div class="card__bottom">
    <button class="pallette-button">
        <img src="assets/images/pallette.svg" alt="">
    </button>
      <i class="far fa-trash-alt card__icon"></i>
    </div>
    `
    appendNoteToOthers(card)
}

function appendNoteToOthers(element) {
    others.prepend(element)
    let content = document.querySelector("#body-note");
    content.value = ""
}
function pallete() {
    let currentcard = this.parentNode.parentNode
    let pallete = currentcard.querySelector(".pallete-colors")
    if (pallete) {
        pallete.remove()
    }
    else {
        addPalleteHtml(currentcard)
    }

}
function addPalleteHtml(currentcard) {
    const pallet = document.createElement("div");
    pallet.classList.add("pallete-colors");
    for (let i = 1; i <= 10; i++) {
        const color = document.createElement("div");
        color.classList.add("color", "color-" + i);
        pallet.append(color)
    }
    currentcard.append(pallet)
}
