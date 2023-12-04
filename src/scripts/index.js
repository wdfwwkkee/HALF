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


tabBtn[0].addEventListener('click', ()=> {
  tabContent[0].classList.remove('active');
  tabContent[1].classList.add('active');
})

tabBtn[2].addEventListener('click', ()=> {
  tabContent[1].classList.remove('active');
  tabContent[0].classList.add('active');
})


tabBtn[1].addEventListener('click', ()=> {
  tabContent[1].classList.remove('active');
  tabContent[2].classList.add('active');
})


tabBtn[3].addEventListener('click', ()=> {
  tabContent[2].classList.remove('active');
  tabContent[1].classList.add('active');
})

tabBtn[4].addEventListener('click', ()=> {
  tabContent[2].classList.remove('active');
  tabContent[0].classList.add('active');
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