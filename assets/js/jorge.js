function createCardHtml(content,color) {
    const card = document.createElement("div");
    card.classList.add("card",color);
    card.innerHTML = `
    <p class="card__content">${content}</p>
    <div class="card__bottom">
      <i class="fas fa-palette card__icon"></i>
      <i class="far fa-trash-alt card__icon"></i>
    </div>
    `
    return card
}

function addPalleteHtml() {
    const pallet = document.createElement("div");
    pallet.classList.add("pallete-colors");
    for(let i =1; i<=10;i++){
        const color = document.createElement("div");
        color.classList.add("color","color-"+i);
        pallet.append(color)
    }
    return pallet
}
