"use strict"

// Ejercicio 1

var  miNombre = ("Martín Gago");
console.log(miNombre)

// Ejercicio 2

miNombre = ("Chorén");
console.log(miNombre)

// Ejercicio 3

/* Si comentamos la variable creada anteriormente, la consola nos va a mostrar un error, 
ya que nuestra variable no ha sido definida "Uncaught ReferenceError: miNombre is not defined"
*/

// Ejercicio 4

let operador1 = 5;
let operador2 = 6;
let resultado = 0;

resultado = operador1+operador2;

console.log(resultado)

// Ejercicio 4

// Area de un circulo = 𝝅 * r² 

const pi = 3.14159265;
var radio = 2;
let area = 0
area = pi * (radio *radio)

console.log("El área del circulo es " + area)


// SOLUCION DE CLASE
   /* let a=0, r = 2;
    const PI = 3.14159265;
    a = PI * r * r;
        console.log(`A = 𝝅 * ${r}² = ${a} `)
    */

// Ejercicio 5

//Area triangulo: base * altura / 2


// var lado = 6;
// var altura = 5
// let areaTriangulo = 0;

// areaTriangulo = (lado * altura) / 2
// console.log("El área del triangulo es " + areaTriangulo)

// AVANZADO
const introducirAltura = document.querySelector(".altura-triangulo");
const introducirLado = document.querySelector(".lado-triangulo");
const txtTriangulo = document.querySelector(".txt-triangulo");
let buttonTriangulo = document.querySelector(".button-triangulo");

buttonTriangulo.addEventListener(
    "click",
    ()=>{
       txtTriangulo.textContent=  "El área del triangulo es " + Number(introducirLado.value) * Number(introducirAltura.value) / 2;
       
    }
)


// let atriangulo = 0;
// let base = 3, altura = 2;
// base = prompt("Dame la base");
// base = Number(base);
// altura = prompt("Dame la altura");
// altura = Number(altura);

// atriangulo = (base * altura) / 2;
// txtTriangulo.innerHTML = `<code>
// A(${base}*${altura}/2) = ${atriangulo} </code>`




// Ejercicio 6

//si el valor introducido es mayor que 2 la persona es alta, si es menor, es baja
// Introducir altura de la persona: en cm
const botonAltura = document.querySelector(".boton-altura");
const alturaPersona = document.querySelector(".introduce-altura");
const resultado2 = document.querySelector(".resultado-altura");

botonAltura.addEventListener(
    "click",
    ()=>
    {
        if( Number(alturaPersona.value) <200) {
            resultado2.textContent = "la persona es baja, tiene una altura de " + alturaPersona.value + "cm"
           } else {
               resultado2.textContent = "la persona es alta, tiene una altura de " + alturaPersona.value + "cm"
           } 
    }
)

// RESUELTO PROFE

const esPersonaAlta = (
    =>
    {
        let alt = prompt("Dame tu altura");
        alt = 333
    }
)
