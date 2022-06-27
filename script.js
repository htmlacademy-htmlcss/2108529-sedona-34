// opening and closing modal window
let modal = document.querySelector(".modal-container"),
    modalOpenButton = document.querySelector(".modal-open-button"),
    modalCloseButton = document.querySelector(".modal-close-button");

modalOpenButton.onclick = function () {
  modal.classList.toggle("modal-closed")
}

modalCloseButton.onclick = function () {
  modal.classList.toggle("modal-closed");
}
