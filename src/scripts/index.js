const signInBtn = document.getElementById('singIn');
const singModal = document.getElementById('singModal');
const closeSingInBtn = document.getElementById('closeSingIn');
const tabContent = document.querySelectorAll('.tab-content');
const tabBtn = document.querySelectorAll('.tabBtn');


signInBtn.addEventListener('click', ()=> {
  singModal.classList.add('open');
})


closeSingInBtn.addEventListener('click', ()=> {
  singModal.classList.remove('open');
})



tabBtn.forEach((tab, index)=> {
  tab.addEventListener('click', (e)=> {
    tabBtn.forEach(tab=> {tab.classList.remove('active')});
    tab.classList.add('active');
    tabContent.forEach(content=>{content.classList.remove('active')});
    tabContent[index].classList.add('active');
  });
})









//hero-swiper
var heroSwiper = new Swiper(".heroSwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

//rait-swiper

var raitSwiper = new Swiper(".raitingSwiper", {
    slidesPerView: "2",
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });