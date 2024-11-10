(() => {
    const openModalBtns = document.querySelectorAll('[data-modal-open]');
    const closeModalBtns = document.querySelector('[data-modal-close]');
    const modal = document.querySelector('[data-modal]');

    openModalBtns.forEach(function addEvListener(openModalBtns) {
        openModalBtns.addEventListener('click', toggleModal);
    });

    closeModalBtns.addEventListener('click', toggleModal);

    function toggleModal() {
        modal.classList.toggle('is-hidden');
    }
})();