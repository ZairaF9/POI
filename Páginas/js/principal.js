 const modalbtn=document.getElementById('btn_add_grupo');
 const closebtn=document.getElementById('btn-close');
const modal=document.querySelector('.modal');

modalbtn.addEventListener('click',openModal);

function openModal(){
    modal.style.display='grid';
}

closebtn.addEventListener('click',closeModal);

function closeModal(){
    modal.style.display='none';
}

modal.addEventListener('click',function(e){
if(e.target.classList.contains('modal')){
    closeModal();
}
})

