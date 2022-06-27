// opening and closing modal window
let modal = document.querySelector(".modal-container"),
    hotelSearchButton = document.querySelector(".hotel-search-button"),
    modalCloseButton = document.querySelector(".modal-close-button");

hotelSearchButton.onclick = function () {
  modal.classList.toggle("modal-closed")
}

modalCloseButton.onclick = function () {
  modal.classList.toggle("modal-closed");
}
