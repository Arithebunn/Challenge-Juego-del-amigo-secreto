// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];


//Al hacer click en añadir
function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;
    if (nuevoAmigo == '') {
        alert('Inserte un nombre válido'); //Validar entrada
    } else {
        listaDeAmigos.push(nuevoAmigo); //Agregar nombre a lista invisible
        limpiarCaja();
        //document.querySelector('#listaAmigos').innerHTML = nuevoAmigo;
        listaVisible();
    }
    return console.log(nuevoAmigo);
}


function listaVisible () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
    }
}

//Al hacer click en Sortear amigo
function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
    console.log(indiceAleatorio);
    console.log(listaDeAmigos[indiceAleatorio]);
    return document.getElementById('resultado').innerHTML = listaDeAmigos[indiceAleatorio];
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

