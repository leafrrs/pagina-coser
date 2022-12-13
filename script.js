const OpenModalButton = document.querySelector("#open-modal");
const CloseModalButton = document.querySelector("#close-modal");
const Modal = document.querySelector("#modal");
const Fade = document.querySelector("#fade");

const ToggleModal = () => {
   [Modal, Fade].forEach((el) => el.classList.toggle("hide"));
};

[OpenModalButton, CloseModalButton, Fade].forEach((el) => {
    el.addEventListener("click", () => ToggleModal(""))
});
