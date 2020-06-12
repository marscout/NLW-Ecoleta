function hideModal() {
    const modalView = document.querySelector("#modal")
    modalView.classList.toggle('hide');
}

const buttonViewModal = document.querySelector("#page-home main a")
buttonViewModal.addEventListener('click', hideModal)

const close = document.querySelector("#modal .header a")
close.addEventListener('click', hideModal)