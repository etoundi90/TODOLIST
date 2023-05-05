const reponse = await fetch('ficheProjet1.json');
const taches = await reponse.json();

function genererContenu(taches){
    for(let i = 0; i < taches.length; i++){
        const tache = taches[i];
        const sectionFiches = document.querySelector(".Tableau");
        const tacheElement = document.createElement('tr');
    
    
        const idTache = document.createElement("td");
        idTache.innerText = tache.id;

        const nomTache = document.createElement("td");
        nomTache.innerText = tache.nom;

        const descriptionTache = document.createElement("td");
        descriptionTache.innerText = tache.description;

        const periodeTache = document.createElement("td");
        periodeTache.innerText = tache.periode;

        const etatTache = document.createElement("td");
        etatTache.innerText = tache.etat;
        
        sectionFiches.appendChild(tacheElement);
        tacheElement.appendChild(idTache);
        tacheElement.appendChild(nomTache);
        tacheElement.appendChild(descriptionTache);
        tacheElement.appendChild(periodeTache);
        tacheElement.appendChild(etatTache);
    }
}
genererContenu(taches);

/*modal */

const modalContenair = document.querySelector('.modal-contenaire');
const modalTriggers = document.querySelectorAll('.modal-trigger');

modalTriggers.forEach(trigger => trigger.addEventListener('click',toggleModal));

function toggleModal(){
    modalContenair.classList.toggle('active');
}
