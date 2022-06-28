// opening and closing modal window
let modal = document.querySelector(".modal-container"),
    modalOpenButton = document.querySelector(".modal-open-button"),
    modalCloseButton = document.querySelector(".modal-close-button");

modalOpenButton.onclick = function () {
  modal.classList.remove("modal-closed")
}

modalCloseButton.onclick = function () {
  modal.classList.add("modal-closed");
}
