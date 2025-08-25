// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*Funcionalidades:
-Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y 
lo agregarán a una lista visible al hacer clic en "Adicionar".
-Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
-Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
-Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la
lista y se mostrará en la página. */

let listaDeAmigos = []; //Lista inicial vacía
let nombre = '';

function asignarElementos(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    input = document.getElementById("amigo");
    nombre = input.value.trim();
    if (nombre == ''){
        alert('Inserte un nombre válido, por favor');
        return;
    }
    listaDeAmigos.push(nombre);
    mostrarLista();
}

function mostrarLista(){
    lista = document.getElementById("listaAmigos");
    lista.innerHTML=""; //Se limpia la lista

    listaDeAmigos.forEach(amigo,index){
        li = document.createElement("li");
        li.textContent = amigo;
        
    }
}