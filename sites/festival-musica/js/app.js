
document.addEventListener('DOMContentLoaded', function () {
    startApp()
});


function startApp() { 
    createGalery();
}


function createGalery() {
    const galery = document.querySelector('.galery__img');

    for (let i = 1; i <= 12; i++) { 
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <img src="img/thumb/${i}.jpg" alt="imagen ${i}">
        `;
        imagen.onclick = function () { 
            viewImage(i);
        }
        galery.appendChild(imagen);

    }

}
function viewImage(id) { 
     const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <img src="img/grande/${id}.jpg" alt="imagen ${id}">
        `;
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function () {
        document.body.removeChild(overlay);

    }
    body = document.body.appendChild(overlay);

    //close button
    const closeModal = document.createElement('p');
    closeModal.onclick = function () {
        document.body.removeChild(overlay);
    }
    closeModal.classList.add('modal__close');
    closeModal.innerHTML = 'X';
    overlay.appendChild(closeModal);
    
}


