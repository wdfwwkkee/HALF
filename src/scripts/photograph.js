
const allWorksbtn = document.getElementById("all-works");
const body = document.querySelector('.body');
const allWorksModal = document.querySelector('.all-works-modal');
const closeModal = document.getElementById('close-modal');

allWorksbtn.addEventListener('click', () => {
    allWorksModal.classList.add('open');
    body.classList.add('lock');
});

closeModal.addEventListener('click', () => {
    allWorksModal.classList.remove('open');
    body.classList.remove('lock');
});