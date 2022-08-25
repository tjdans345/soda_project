//메인 토글 버튼
const html = document.querySelector('html');
const body = document.querySelector('body');
const toggleBtn = html.querySelector('.button_toggle');

const modal = html.querySelector('.modal_wrap');
const bg = html.querySelector('.bg');

toggleBtn.addEventListener('click',() =>{
    toggleBtn.classList.toggle('on');
});

function openModal(){
    modal.style.display="block"
    bg.style.display="block"

}
function closeModal(){
    modal.style.display="none"
    bg.style.display="none"

}


// const checkOverBtn = html.querySelector('.btn_check_over_item');
// console.log(checkOverBtn);

