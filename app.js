// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];


//Al hacer click en añadir
function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;
    if (nuevoAmigo == '') {
        alert('Inserte un nombre válido');
    } else {
        listaDeAmigos.push(nuevoAmigo);
        limpiarCaja();
    }
    return console.log(nuevoAmigo);
}



function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}