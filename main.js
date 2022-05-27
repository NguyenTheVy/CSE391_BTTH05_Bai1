const buyBtns = document.querySelectorAll('.js-show')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
const modalCancel = document.querySelector('.btn-cancel')
const btnConfirm = document.querySelector(".btn-confirm")
const labelLearn = document.querySelector(".box-2")
const labelLearnreact = document.querySelector(".learn-react")

//ham hien thi mua ve them class open vao modal
function showbuyticket() {
    modal.classList.add('open')
}

//ham an mua ve go bo class open vao modal
function hidebuyticket() {
    modal.classList.remove('open')
}

//nghe hanh vi click vao nut button close
modalClose.addEventListener('click', hidebuyticket)
modalCancel.addEventListener('click', hidebuyticket)

//sadsadasd
btnConfirm.addEventListener('click', ()=>{
    labelLearn.removeChild(labelLearnreact)
})

//lap qua tung the button va nghe click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showbuyticket)
}

modal.addEventListener('click', hidebuyticket)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})