const pseudo = document.getElementById('pseudo');
const password = document.getElementById('password');
const butonConnect = document.getElementById('btnConnec');
if(pseudo==='admin' && password==='admin'){
    alert('bien jouer');
    butonConnect.addEventListener('click',()=>{
        window.location.href='../HTML/page-accueil.html'
    });
    
}

