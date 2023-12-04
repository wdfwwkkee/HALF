const signInBtn = document.getElementById('singIn');
const singModal = document.getElementById('singModal');
const closeSingInBtn = document.getElementById('closeSingIn');
const tabContent = document.querySelectorAll('.tab-content');
const tabBtn = document.querySelectorAll('.tabBtn');
const body = document.getElementById('body');

signInBtn.addEventListener('click', ()=> {
  singModal.classList.add('open');
  body.classList.add('lock');
})


closeSingInBtn.addEventListener('click', ()=> {
  singModal.classList.remove('open');
  body.classList.remove('lock');
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