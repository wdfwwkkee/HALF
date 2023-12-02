const showCompWorks = document.getElementById('show-completed-orders');
const orderModal = document.querySelector('.completed-orders-modal');
const closeBtn = document.getElementById('close-modal');
const body = document.getElementById('body');
showCompWorks.addEventListener('click', ()=> {
    orderModal.classList.add('open');
    body.classList.add('lock');
});

closeBtn.addEventListener('click', ()=> {
    orderModal.classList.remove('open');
    body.classList.remove('lock');

})