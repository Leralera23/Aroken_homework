const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal__close-btn');
const body = document.body

const openModal = () => {
    modal.classList.add('modal--open')
    body.classList.add('no-scroll')
}

const closeModal = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('no-scroll')
}

btn.addEventListener('click', openModal)

modal.addEventListener('click', (event) => {
    const target = event.target

    if (target.classList.contains('modal') ||
        target.classList.contains('modal__close-btn')) {
        closeModal()
    }
})

closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        closeModal();
    }
})

