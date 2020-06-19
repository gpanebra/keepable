// delegations
document.querySelector("body").addEventListener("click", pallete);




const createButton = document.querySelector(".keep-button");
createButton.addEventListener("click", createCardHtml);
let others = document.querySelector(".others");
const trash_buttons = document.querySelectorAll(".pallette-button");
trash_buttons.forEach((element) =>
  element.addEventListener("click", deleteCard)
);
let notes_nav = document.querySelector(".sidebar-notes");
let trash_nav = document.querySelector(".sidebar-trash");
notes_nav.addEventListener("click", navigation);
trash_nav.addEventListener("click", navigation);

let wrapper = document.querySelector(".wrapper");
messageWaiting();

const cards_todo = [];
const cards_trashed = [];
function createCardHtml() {
  let color = "color-1";
  let content = document.querySelector("#body-note");
  if (content.value.trim().length < 2) {
    return alert("The note will be at least 2 words of length");
  }
  const card = document.createElement("div");

  card.className = `card ${color}`;
  card.id = `card-${cards_todo.length + 1}`;
  card.innerHTML = `
    <p class="card__content">${content.value.trim()}</p>
    <div class="card__bottom">

        <button class="pallette-button">
            <img src="assets/images/pallette.svg" alt="">
        </button>
        <button class="trash-button">
        <img src="assets/images/trash.svg" alt="">
    </button>
    </div>
    `;
  card.querySelector(".pallette-button").addEventListener("click", pallete);
  card.querySelector(".trash-button").addEventListener("click", deleteCard);

  let card_created = {
    card_id: card.id,
    content: content.value.trim(),
    color: color,
  };
  cards_todo.push(card_created);

  return appendNoteToOthers(card, content);
}

function appendNoteToOthers(element, content) {
  others.prepend(element);
  content.value = "";
  messageWaiting();
}
function pallete(e) {
    e.stopPropagation()
  if (e.target.parentNode.classList.contains("pallette-button")){
    let currentcard = e.target.parentNode;
    currentcard.append(addPalleteHtml());
  }
  else { addPalleteHtml().remove() }

}
const addPalleteHtml = ()=>{
    if (this.pallet) return this.pallet;
    else {
        this.pallet = document.createElement("div");
        this.pallet.classList.add("pallete-colors");
        for (let i = 1; i <= 10; i++) {
          const color = document.createElement("div");
          color.classList.add("color", "color-" + i);
          this.pallet.append(color);
        }
        this.pallete.addEventListener("click", addColor);
        return this.pallet
    }
}


function messageWaiting() {
  if (others.childElementCount == 0) {
    let messageContainer = document.createElement("div");
    messageContainer.className = "message-waiting";
    messageContainer.innerHTML = `
            <img src = "assets/images/{.svg" alt = "" >
                <p> Notes you add appear here</p >
                <img src = "assets/images/}.svg" alt = "" >
        `;
    wrapper.append(messageContainer);
    others.style.display = "none";
  } else {
    others.style.display = "grid";
    let message = wrapper.querySelector(".message-waiting");
    if (message) {
      message.remove();
    }
  }
}
function deleteCard() {
  let currentcard = this.parentNode.parentNode;
  let content = currentcard.querySelector(".card__content").textContent;
  let deleted_card = {
    card_id: currentcard.id,
    content: content,
    color: currentcard.classList["1"],
  };
  let index = cards_todo.indexOf(currentcard.id);
  cards_todo.splice(index, 1);
  cards_trashed.push(deleted_card);
  currentcard.remove();
  return messageWaiting();
}

function navigation() {
  let classes = Array.from(this.classList);
  let lastClass = classes.pop();
  if (lastClass == "sidebar-notes") {
    document.querySelector(".sidebar-notes").classList.add("marked");
    document.querySelector(".sidebar-trash").classList.remove("marked");
    return shownotes(); //TODO
  } else {
    document.querySelector(".sidebar-trash").classList.add("marked");
    document.querySelector(".sidebar-notes").classList.remove("marked");
    return showtrash(); //TODO
  }
}
