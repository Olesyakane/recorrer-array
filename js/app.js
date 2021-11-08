"use strict";
/**
 * document.querySelectorAll  Para seleccionar los artículos
 * document.querySelector Para los botones
 * nodo.nextElementSibling
 * nodo.firstElementChild
 * nodo.addEventListener
 * 
 * for(){
 * }
 * 
 * while(){
 * }
 * 
 * do{
 * }while();
 */

//Variables
//capturo las etiquetas article
const a1 = document.querySelectorAll(".a1");
const a2 = document.querySelectorAll(".a2");
const a3 = document.querySelectorAll(".a3");

let numbers = [1,2,3];
const ordenarFor = (evento) => {
    evento.preventDefault();//evito propagación del evento. en este caso que el enlace vaya a su destino(href)

let p1 = a1[1].firstElementChild.nextElementSibling;
let p2 = p1.nextElementSibling;

p1.innerHTML = "<h6 style=\"color:red;font-weight:bold\">For: orden ascendente</h6>";
for(let i = 0; i<numbers.length; i++){
        p1.innerHTML += `<div>Posición ${i}:${numbers[i]}</div>`;
    }
    
    p2.innerHTML = "<h6 style=\"color:red;font-weight:bold\">For: orden descendente</h6>";
    //Funciones

    for(let i = numbers.length-1; i>=0; i--){
        p2.innerHTML += `<div>Posición ${i}:${numbers[i]}</div>`;
    }
}

const ordenarWhile = (e) => {
    e.preventDefault();
    let numbers = [1,2,3];
    let x = 0;
    while(x<numbers.length){
        console.log(`Posición ${x}: ${numbers[x]}`);
        x=x+1; //x++
    }

    x= numbers.length-1;

    while(x>=0){
        console.log(`´Posición ${x}: ${numbers[x]}`);
        x--;
    }
    // console.log(x)
}


const ordenarDoWhile = (e) => {
    e.preventDefault();
    let numbers = [1,2,3];
    //E6 for of
    // for(let valor of numbers){
    //     alert(valor)
    // }

    //Método forEach
    numbers.forEach(
        (valor,indice,array) => {
            console.log(`${valor}-${indice}-Array[${array}]`)
        }
    );

    // let x = 0;


    // do{
    //     console.log(`Posición ${x}: ${numbers[x]}`);
    //     x=x+1; //x++
    // }while(x<numbers.length);

    // x= numbers.length-1;

    // do{
    //     console.log(`´Posición ${x}: ${numbers[x]}`);
    //     x--;
    // }while(x>=0)
    // console.log(x)
}


//Eventos
//Escuchar botón
document.querySelector("#b1")
    addEventListener(
        "click",
        ordenarFor
    );

document.querySelector("#b2")
addEventListener(
    "click",
    ordenarWhile
);


document.querySelector("#b3")
addEventListener(
    "click",
    ordenarDoWhile
);