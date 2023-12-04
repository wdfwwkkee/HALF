const showCompWorks = document.getElementById('show-completed-orders');
const orderModal = document.querySelector('.completed-orders-modal');
const closeOrderModal = document.getElementById('close-order-modal');


const closeGalleryBtn = document.getElementById('close-gallery-modal');
const allWorksBtn = document.getElementById('all-works');
const allWorksModal = document.querySelector('.all-works-modal');

closeGalleryBtn.addEventListener('click', ()=> {
    allWorksModal.classList.remove('open');
    body.classList.remove('lock');
})

allWorksBtn.addEventListener('click', ()=> {
    allWorksModal.classList.add('open');
    body.classList.add('lock');
})


showCompWorks.addEventListener('click', ()=> {
    orderModal.classList.add('open');
    body.classList.add('lock');
});

closeOrderModal.addEventListener('click', ()=> {
    orderModal.classList.remove('open');
    body.classList.remove('lock');
})

