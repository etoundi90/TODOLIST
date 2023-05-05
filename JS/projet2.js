// const ouvrirModal = document.getElementById('but-nouv-tache');


const contenairModal = document.querySelector('.contenair-modal');
const butfermer = document.querySelector('.btnfermer');

butfermer.addEventListener("click",fermer)

function fermer(){
    contenairModal.classList.toggle("form");
}