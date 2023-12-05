const issuePrice = document.getElementById('issue-price');
let priceNumber = document.querySelector('.price-self');

const durationBtns = document.querySelectorAll('.duration-btn');
const counterBtns = document.querySelectorAll('.counter-btn');


let counterNumber = document.querySelector('.calc-counter-self');
let durationNumber = document.querySelector('.calc-duration-self');





durationBtns.forEach((el)=> {
    el.addEventListener('click', ()=> {
        if (el.innerText === "+") {
            if (durationNumber.innerText < 10) {
                durationNumber.innerText++;
            }  
        }
        else if (el.innerText === "-") {
            if (durationNumber.innerText > 1) {
                durationNumber.innerText--;
            }
        }
        const result = ((durationNumber.innerText * counterNumber.innerText) * 1000) * 1.25;
        priceNumber.innerHTML = result;
    })
})


counterBtns.forEach((el)=> {
    el.addEventListener('click', ()=> {
        if (el.innerText === "+") {
            if (counterNumber.innerText < 10) {
                counterNumber.innerText++;
            }  
        }
        else if (el.innerText === "-") {
            if (counterNumber.innerText > 1) {
                counterNumber.innerText--;
            }
        }
        const result = ((durationNumber.innerText * counterNumber.innerText) * 1000) * 1.25;
        priceNumber.innerHTML = result;
    })
})


